import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import { Image, Smile, Send } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="border-end col-3">lewa kolumna</div>
                    <div className="col-6 py-4">
                        <div className="border-bottom p-3">
                            <div className="d-flex gap-3">
                                <div
                                    style={{
                                        width: '55px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        backgroundColor: '#838282',
                                    }}
                                >
                                    <span className="mb-3 ml-18 text-white">
                                        @Alxay7
                                    </span>
                                </div>

                                <input
                                    type="text"
                                    className="form-control fs-5 mt-4 border-0"
                                    placeholder="Co się dzieje?"
                                    style={{
                                        boxShadow: 'none',
                                    }}
                                />
                            </div>
                            <div className="d-flex mt-3 gap-4 ps-120">
                                <Image size={22} />
                                <Smile size={22} />
                                <Send size={22} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p>Tu pojawią się posty...</p>
                        </div>
                    </div>

                    <div className="border-start col-3">prawa kolumna</div>
                </div>
            </div>
        </>
    );
}
