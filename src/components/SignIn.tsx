
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

interface SignInProps {
  onGoToSignUp: () => void;
}

export const SignIn = ({ onGoToSignUp }: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // The onAuthStateChanged listener in App.tsx will handle the redirect
    } catch (err: any) {
      switch (err.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          setError('Invalid email or password. Please try again.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/too-many-requests':
            setError('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.');
            break;
        case 'auth/network-request-failed':
            setError('Network error. Please check your internet connection and try again.');
            break;
        default:
          setError('Failed to sign in. Please try again later.');
          break;
      }
      console.error("Sign in error:", err);
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
          <h1 className="text-3xl font-brand font-bold text-slate-800 dark:text-slate-200">
            Clerkly
          </h1>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">Welcome Back</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Sign in to continue to your account.
          </p>
          
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="relative">
              <i className="fa-solid fa-envelope text-slate-400 absolute top-1/2 left-3 -translate-y-1/2 text-xs"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full pl-8 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>
            
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

            {error && (
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 text-xs rounded-lg p-3 flex items-center gap-2">
                <i className="fa-solid fa-circle-exclamation"></i>
                <span className="flex-1">{error}</span>
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-indigo-950 text-white text-sm font-bold py-3 rounded-lg hover:bg-indigo-900 transition-all shadow-lg active:scale-[0.98] disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
        
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-6">
          Don't have an account?{' '}
          <button onClick={onGoToSignUp} className="font-bold text-indigo-600 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};
