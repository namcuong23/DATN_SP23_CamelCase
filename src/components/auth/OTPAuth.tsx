import { useState } from "react"
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, updateProfile } from "firebase/auth";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs"
import { CgSpinner } from "react-icons/cg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OtpInput from "otp-input-react"
import { toast, Toaster } from "react-hot-toast";
import { auth } from "../../firebase";
import UseAuth from "./UseAuth";
import firebase from 'firebase/app';
import { useNavigate } from "react-router-dom";

const OTPAuth = () => {
    const [otp, setOtp] = useState("")
    const [ph, setPh] = useState("")
    const [loading, setLoading] = useState(false)
    const [showOTP, setShowOTP] = useState(false)
    const [user, setUser] = useState(null)
    const windowType: any = window
    const currentUser: any = UseAuth()
    const navigate = useNavigate()

    const onCapchaVerify = () => {
        if (!windowType.recaptchaVerifier) {
            windowType.recaptchaVerifier = new RecaptchaVerifier(
                'recaptcha-container',
                {
                    size: 'invisible',
                    callback: (response: any) => {
                        console.log(response);

                        // reCAPTCHA solved, allow signInWithPhoneNumber.
                        onSignup()
                    },
                    "expired-callback": () => {
                        // Response expired. Ask user to solve reCAPTCHA again.
                    }
                },
                auth
            );
        }
    }

    // const handleSendOTP = () => {
    //     const phoneNumber = '+' + ph

    //     // create a new instance of Firebase's auth provider
    //     const authProvider: any = new PhoneAuthProvider(auth);

    //     // initiate the OTP verification process by sending an SMS to the given phone number
    //     authProvider.verifyPhoneNumber(phoneNumber, {
    //         // set the time in seconds that the SMS code will be valid
    //         // the default is 120 seconds (2 minutes)
    //         timeOut: 60,

    //         // set a callback function to handle the retrieval of the verification ID
    //         // which is needed later to verify the code entered by the user
    //         // in this example, we are storing the verification ID in Firestore
    //         // Note: Firestore is not required for this process, it is used here to demonstrate the use of a persistent data store.
    //         verificationCompleted: (verificationId: any) => {
    //             console.log(verificationId);

    //             // firebase.firestore().collection('users').doc(phoneNumber).set({ verificationId });
    //         },

    //         // set a callback function to handle when the verification code is sent to the user
    //         // in this example, we are logging the code to the console
    //         codeSent: (verificationId: any, { forceResendingToken }: { forceResendingToken: any }) => {
    //             console.log("verification code sent to phone: ", phoneNumber);
    //             console.log("verification ID: ", verificationId);
    //         },

    //         // set a callback function to handle when an error occurs
    //         // in this example, we are logging the error to the console
    //         // you should handle errors appropriately in your application
    //         verificationFailed: (error: any) => {
    //             console.log("verification error: ", error);
    //         }
    //     });
    // }

    const onSignup = async () => {
        setLoading(true)
        onCapchaVerify()

        const appVerifier = windowType.recaptchaVerifier;
        const phoneNumber = '+' + ph

        await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code)
                console.log('3');
                windowType.confirmationResult = confirmationResult
                setLoading(false);
                setShowOTP(true)
                toast.success('OTP sended successfully!')
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    const onOTPVerify = () => {
        setLoading(true);
        windowType.confirmationResult.confirm(otp).then(async (res: any) => {
            setUser(res.user)
            // updateProfile(currentUser, {
            //     phoneNumber: res.user.phoneNumber
            // })
            // navigate('/profile')
            setLoading(false);
        }).className((err: any) => {
            console.log(err);
            setLoading(false);
        })
    }
    console.log(user);

    return (
        <section className="bg-emerald-500 flex items-center justify-center h-screen">
            <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>
                {
                    user ?
                        <h2 className="text-center text-white font-medium text-2xl">
                            Login Success
                        </h2> :
                        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                            <h1 className="text-center leading-normal text-white font-medium text-3xl">
                                Otp Authentication
                            </h1>

                            {
                                showOTP ?
                                    <>
                                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                            <BsFillShieldLockFill size={30} />
                                        </div>
                                        <label
                                            htmlFor="ph"
                                            className="font-bold text-xl text-white text-center"
                                        >
                                            Enter your OTP
                                        </label>
                                        <OtpInput
                                            value={otp}
                                            onChange={setOtp}
                                            OTPLength={6}
                                            otpType="number"
                                            disabled={false}
                                            autoFocus
                                            className="opt-container"
                                        ></OtpInput>
                                        <button
                                            onClick={onOTPVerify}
                                            className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                                            {
                                                loading && <CgSpinner size={20} className="mt-1 animate-spin" />
                                            }

                                            <span>Verify OTP</span>
                                        </button>
                                    </> :
                                    <>
                                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                            <BsTelephoneFill size={30} />
                                        </div>
                                        <label
                                            htmlFor=""
                                            className="font-bold text-xl text-white text-center"
                                        >
                                            Xác thực bằng số điện thoại
                                        </label>
                                        <PhoneInput
                                            country={"vn"}
                                            value={ph}
                                            onChange={setPh} />
                                        <button
                                            onClick={onSignup}
                                            className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                                            {
                                                loading && <CgSpinner size={20} className="mt-1 animate-spin" />
                                            }

                                            <span>Gửi mã</span>
                                        </button>
                                    </>
                            }

                        </div>
                }
            </div>
        </section>
    )
}

export default OTPAuth