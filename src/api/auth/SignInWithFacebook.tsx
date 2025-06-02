import supabase from "../../lib/supabaseClient";

const SignInWithFacebook = async () => {
  try {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: window.location.origin + "/home",
      },
    });

    if (error) {
      console.error("Error signing in with facebook", error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data, message: "Sign In Successfully" };
  } catch (err) {
    console.error("Error signing in with facebook", err);
    return;
  }
};

export default SignInWithFacebook;
