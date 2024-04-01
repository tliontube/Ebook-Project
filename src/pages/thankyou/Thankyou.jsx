import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const ThankYou = () => {
    return (
        <Layout>
        <div className='flex justify-center items-center h-screen'>
            <div className="login_Form bg-pink-50 px-8 py-6  border border-pink-100 rounded-xl shadow-md">
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Thank You for Your Submission!
                    </h2>
                </div>
                <div className="mb-5">
                    <p className="text-center">We appreciate your interest. We'll get back to you soon.</p>
                </div>
                <div className="mb-5">
                    <Link to="/" className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md block'>
                        Back to Form
                    </Link>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default ThankYou;
