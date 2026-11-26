
import { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Specialty } from '../types';

interface SignUpProps {
  onGoToSignIn: () => void;
}

const roles = ['Medical Student', 'Intern', 'Resident', 'Consultant', 'Other'];
const specialties: Specialty[] = ['Pediatrics', 'Internal Medicine', 'Obstetrics and Gynecology', 'Surgery', 'General Outpatient', 'Behavioral Sciences'];

export const SignUp = ({ onGoToSignIn }: SignUpProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [specialty, setSpecialty] = useState<Specialty | '' | 'N/A'>('');

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword || !role || (role !== 'Medical Student' && !specialty)) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }
    setError('');
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 1. Update Auth Profile
      await updateProfile(user, { displayName: fullName });

      // 2. Save professional details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        role: role,
        specialty: specialty,
      });

      // 3. Send verification email
      await sendEmailVerification(user);

      // onAuthStateChanged in App.tsx will handle the UI redirect

    } catch (err: any) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('This email is already in use. Please sign in instead.');
          break;
        case 'auth/weak-password':
          setError('The password is too weak. Please use at least 6 characters.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/network-request-failed':
          setError('Network error. Please check your internet connection and try again.');
          break;
        default:
          setError('Failed to sign up. Please check your details and try again.');
          break;
      }
      console.error("Sign up error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-sm">

        <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-inner bg-indigo-950 dark:bg-white">
              <i className="fa-solid fa-file-medical text-white dark:text-indigo-950 text-lg leading-none"></i>
            </div>
            <div className="relative">
              <h1 className="text-3xl font-brand font-bold text-slate-800 dark:text-slate-200">
                clerkly
              </h1>
            </div>
          </div>
      
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">Create your Account</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Start your journey with us today.
            </p>
            
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="relative">
                <i className="fa-solid fa-user text-slate-400 absolute top-1/2 left-3 -translate-y-1/2 text-xs"></i>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="w-full pl-8 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>

              <div className="relative">
                <i className="fa-solid fa-at text-slate-400 absolute top-1/2 left-3 -translate-y-1/2 text-xs"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full pl-8 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <i className="fa-solid fa-lock text-slate-400 absolute top-1/2 left-3 -translate-y-1/2 text-xs"></i>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full pl-8 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  />
                </div>
                <div className="relative">
                  <i className="fa-solid fa-check-double text-slate-400 absolute top-1/2 left-3 -translate-y-1/2 text-xs"></i>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm"
                    required
                    className="w-full pl-8 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700/50 my-6"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                      <i className="fa-solid fa-user-doctor text-slate-400 absolute top-1/2 left-3 -translate-y-1/2 text-xs"></i>
                      <select
                          value={role}
                          onChange={(e) => {
                              setRole(e.target.value);
                              if (e.target.value === 'Medical Student') {
                                  setSpecialty('N/A');
                              } else {
                                  setSpecialty('');
                              }
                          }}
                          required
                          className="w-full pl-8 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition appearance-none"
                      >
                          <option value="" disabled>I am a...</option>
                          {roles.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                  </div>
                  <div className="relative">
                      <i className="fa-solid fa-stethoscope text-slate-400 absolute top-1/2 left-3 -translate-y-1/2 text-xs"></i>
                      <select
                          value={specialty}
                          onChange={(e) => setSpecialty(e.target.value as Specialty)}
                          required
                          disabled={role === '' || role === 'Medical Student'}
                          className="w-full pl-8 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                          <option value="" disabled>Specialty...</option>
                          {role === 'Medical Student' ? <option value="N/A">N/A</option> : specialties.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                  </div>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 text-xs rounded-lg p-3 flex items-center gap-2">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span>{error}</span>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-indigo-950 text-white text-sm font-bold py-3 rounded-lg hover:bg-indigo-900 transition-all shadow-lg active:scale-[0.98] disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>
          </div>
          
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-6">
            Already have an account?{' '}
            <button onClick={onGoToSignIn} className="font-bold text-indigo-600 hover:underline">
              Sign In
            </button>
          </p>
      </div>
    </div>
  );
};
