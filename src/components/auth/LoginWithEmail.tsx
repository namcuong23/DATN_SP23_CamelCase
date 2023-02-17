import { AiOutlineMail } from "react-icons/ai"
import 'react-phone-input-2/lib/style.css'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendSignInLinkToEmail,
    signOut,
    FacebookAuthProvider,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { message } from "antd";
import UseAuth from "./UseAuth";

type Props = {}

const LoginWithEmail = (props: Props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const currentUser = UseAuth()

    const signUp = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                message.info('Created successfully!')

            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                message.info(errorCode)
                // ..
            });




    }

    const signIn = () => {
        // const actionCodeSettings = {
        //     // URL you want to redirect back to. The domain (www.example.com) for this
        //     // URL must be in the authorized domains list in the Firebase Console.
        //     url: 'https://www.facebook.com/',
        //     handleCodeInApp: true,
        //     iOS: {
        //         bundleId: 'https://www.facebook.com/'
        //     },
        //     android: {
        //         packageName: 'https://www.facebook.com/',
        //         installApp: true,
        //         minimumVersion: '12'
        //     },
        //     dynamicLinkDomain: 'https://www.facebook.com/'
        // };
        // if (email) {
        //     sendSignInLinkToEmail(auth, email, actionCodeSettings)
        //         .then(() => {
        //             // The link was successfully sent. Inform the user.
        //             // Save the email locally so you don't need to ask the user for it again
        //             // if they open the link on the same device.
        //             // window.localStorage.setItem('emailForSignIn', email);
        //             console.log(email);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                message.info('Signed in successfully!')

            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                message.info(errorCode)
            });
        //         })
        //         .catch((error) => {
        //             const errorCode = error.code;
        //             // const errorMessage = error.message;
        //             message.info(errorCode)
        //         });
        // }
    }

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider()
        provider.addScope('user_birthday');
        provider.setCustomParameters({
            'display': 'popup'
        });
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential: any = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });

    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential: any = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                console.log(result.user);
                message.info("Login with Google!")

            }).catch((error) => {
                message.info(error.data)
            })
    }

    const onSignOut = async () => {
        try {
            await signOut(auth)
            message.info('Signout')
        } catch (error) {

        }
    }

    return (
        <section className="bg-emerald-500 flex flex-col items-center justify-center h-screen">
            <h1 className="m-5 text-2xl text-white font-bold">
                Hello
                {/* <span>{currentUser ? currentUser : ""}</span> */}
            </h1>

            <div className="flex flex-col bg-white px-[50px] py-[80px] rounded w-[350px] shadow-xl shadow-black">
                <h2 className="text-center text-2xl font-bold text-emerald-500 justify-center mb-6">Create Account</h2>
                <input
                    className="border border-emerald-500 mb-3 rounded px-2 py-1"
                    placeholder="Enter your email"
                    type="email"
                    onChange={(e: any) => setEmail(e.target.value)} />
                <input
                    className="border border-emerald-500 mb-3 rounded px-2 py-1"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(e: any) => setPassword(e.target.value)} />
                <button
                    className="bg-emerald-500 rounded py-1 text-white font-bold mb-3"
                    onClick={signUp}>
                    Create account
                </button>
                <button
                    className="bg-emerald-500 rounded py-1 text-white font-bold mb-3"
                    onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
                <button
                    className="bg-emerald-500 rounded py-1 text-white font-bold mb-3"
                    onClick={signInWithFacebook}>
                    Sign in with Facebook
                </button>
                <button
                    className="bg-emerald-500 rounded py-1 text-white font-bold mb-3"
                    onClick={signIn}>
                    Sign in
                </button>
                <button
                    className="bg-emerald-500 rounded py-1 text-white font-bold mb-3"
                    onClick={onSignOut}>
                    Sign out
                </button>
            </div>
        </section>
    )
}

export default LoginWithEmail