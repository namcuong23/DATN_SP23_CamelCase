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
import { auth, db } from "../../firebase";
import { useState } from "react";
import { message } from "antd";
import UseAuth from "./UseAuth";
import { doc, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";

type Props = {}

const LoginWithEmail = (props: Props) => {
    const [userName, setUserName] = useState("")
    const [emailSignup, setEmailSignup] = useState("")
    const [passwordSignup, setPasswordSignup] = useState("")

    const [emailSignin, setEmailSignin] = useState("")
    const [passwordSignin, setPasswordSignin] = useState("")

    const currentUser: any = UseAuth()

    const signUp = async () => {
        const email = emailSignup
        const password = passwordSignup

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                const user: any = userCredential.user;
                user.displayName = userName
                console.log(user);
                message.info("Created account successfully!")

                const userCollecttionRef = doc(db, "users", user.uid)
                await setDoc(userCollecttionRef, { email, password })

                message.info('Created successfully!')
                setEmailSignup("")
                setPasswordSignup("")

            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                message.info(errorCode)
                // ..
            });

    }

    const signIn = async () => {
        const email = emailSignin
        const password = passwordSignin
        const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be in the authorized domains list in the Firebase Console.
            url: 'my-app-fa32c.firebaseapp.com',
            handleCodeInApp: true,
            iOS: {
                bundleId: 'com.example.ios'
            },
            android: {
                packageName: 'com.example.android',
                installApp: true,
                minimumVersion: '12'
            },
            dynamicLinkDomain: 'example.page.link'
        };
        if (email) {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings)
                .then(async () => {
                    // The link was successfully sent. Inform the user.
                    // Save the email locally so you don't need to ask the user for it again
                    // if they open the link on the same device.
                    // window.localStorage.setItem('emailForSignIn', email);
                    console.log(email);
                    await signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user);

                            message.info('Signed in successfully!')
                            setEmailSignin("")
                            setPasswordSignin("")


                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            // const errorMessage = error.message;
                            message.info(errorCode)
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                    message.info(errorCode)
                });
        }
    }

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider()
        await signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential: any = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                message.info("Sign in with Facebook!")
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                message.info(errorCode)
                console.log(errorCode)
                console.log(email)
                console.log(credential)

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
        } catch (error: any) {
            message.info(error.message)
        }
    }

    return (
        <section className="bg-emerald-500 flex flex-col items-center justify-center h-screen">
            <h1 className="m-5 text-2xl text-white font-bold">
                Hello
                <span className="ml-3">{currentUser ? currentUser?.displayName : ""}</span>
            </h1>

            <div className="flex flex-row space-x-6">
                <div className="flex flex-col bg-white px-[50px] py-[80px] rounded w-[350px] shadow-xl shadow-black">
                    <h2 className="text-center text-2xl font-bold text-emerald-500 justify-center mb-6">Create Account</h2>
                    <input
                        className="border border-emerald-500 mb-3 rounded px-2 py-1"
                        placeholder="Enter your username"
                        type="text"
                        value={userName}
                        onChange={(e: any) => setUserName(e.target.value)} />
                    <input
                        className="border border-emerald-500 mb-3 rounded px-2 py-1"
                        placeholder="Enter your email"
                        type="email"
                        value={emailSignup}
                        onChange={(e: any) => setEmailSignup(e.target.value)} />
                    <input
                        className="border border-emerald-500 mb-3 rounded px-2 py-1"
                        placeholder="Enter your password"
                        type="password"
                        value={passwordSignup}
                        onChange={(e: any) => setPasswordSignup(e.target.value)} />
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
                </div>
                <div className="flex flex-col bg-white px-[50px] py-[80px] rounded w-[350px] shadow-xl shadow-black">
                    <h2 className="text-center text-2xl font-bold text-emerald-500 justify-center mb-6">Login</h2>
                    <input
                        className="border border-emerald-500 mb-3 rounded px-2 py-1"
                        placeholder="Enter your email"
                        type="email"
                        value={emailSignin}
                        onChange={(e: any) => setEmailSignin(e.target.value)} />
                    <input
                        className="border border-emerald-500 mb-3 rounded px-2 py-1"
                        placeholder="Enter your password"
                        type="password"
                        value={passwordSignin}
                        onChange={(e: any) => setPasswordSignin(e.target.value)} />
                    <button
                        className="bg-emerald-500 rounded py-1 text-white font-bold mb-3"
                        onClick={signIn}>
                        Sign in
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
                        onClick={onSignOut}>
                        Sign out
                    </button>
                </div>
            </div>
        </section>
    )
}

export default LoginWithEmail