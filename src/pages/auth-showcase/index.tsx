import { Session } from 'next-auth'
import { signIn, signOut } from "next-auth/react";
import CustomButton from '../../components/custom-button';


interface AuthProps {
    sessionData: Session | null
  }

const AuthShowcase: React.FC<AuthProps> = ({sessionData}) => {

    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl text-white">
          {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        </p>
        {/* <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button> */}
        <CustomButton
          onClick={sessionData ? () => void signOut() : () => void signIn()}
          title={sessionData ? "Sign out" : "Sign in"}
        />
      </div>
    );
  };

  export default AuthShowcase