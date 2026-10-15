
import { useState } from 'react';
import { auth } from '../firebase';
import { sendEmailVerification } from 'firebase/auth';
import { signOut } from 'firebase/auth';

export const VerifyEmail = () => {
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleResendEmail = async () => {
    const user = auth.currentUser;
    if (!user) {
      setSendError("No user is logged in. Please sign in again.");
      return;
    }

    setIsSending(true);
    setSendError(null);
    setSendSuccess(false);

    try {
      await sendEmailVerification(user);
      setSendSuccess(true);
    } catch (err: any) {
      console.error("Email resend error:", err);
      if (err.code === 'auth/too-many-requests') {
        setSendError("You have requested to resend the email too many times. Please try again later.");
      } else {
        setSendError("Failed to resend verification email. Please try again.");
      }
    } finally {
      setIsSending(false);
    }
  };

  const handleSignOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Failed to sign out:", error);
    }
  };


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center p-4 text-center">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-inner bg-indigo-950 dark:bg-white">
            <i className="fa-solid fa-file-medical text-white dark:text-indigo-950 text-lg leading-none"></i>
          </div>
          <h1 className="text-3xl font-brand font-bold text-slate-800 dark:text-slate-200">
            Clerkly
          </h1>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
          <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-900/50 flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-envelope-open-text text-3xl text-indigo-600 dark:text-indigo-300"></i>
          </div>

          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-2">
            Verify Your Email Address
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            We have sent a verification link to your email address. Please click the link in the email to activate your account. This page will automatically update once your account has been verified.
          </p>

          <button 
            onClick={handleResendEmail}
            disabled={isSending}
            className="w-full bg-indigo-950 text-white text-sm font-bold py-3 rounded-lg hover:bg-indigo-900 transition-all shadow-lg active:scale-[0.98] disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed mb-4"
            >
            {isSending ? 'Sending...' : 'Resend Verification Email'}
            </button>

          {sendSuccess && (
            <p className="text-sm text-green-600 dark:text-green-400 mb-4">A new verification email has been sent to your address.</p>
          )}
          {sendError && (
            <p className="text-sm text-red-600 dark:text-red-400 mb-4">{sendError}</p>
          )}

          <p className="text-xs text-slate-500 dark:text-slate-400">
            If you have already verified your email, try refreshing the page. If you have any issues, please sign out and sign back in.
          </p>
          
        </div>

        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-6">
            Wrong account?{' '}
            <button onClick={handleSignOut} className="font-bold text-indigo-600 hover:underline">
                Sign Out
            </button>
        </p>

      </div>
    </div>
  );
};
