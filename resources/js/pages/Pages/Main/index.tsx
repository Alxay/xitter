import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import {
    Image,
    Smile,
    Send,
    Palette,
    University,
    Banana,
    Fish,
    CloudAlert,
    Package2,
    BookMarked,
    Star,
    CircleUserRound,
    Minus,
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Profile {
    name: string;
    username: string;
    posts: number;
    bio: string;
    location: string;
    joined: string;
    following: number;
    followers: number;
    banner: string;
    avatar: string;
}

interface MainPageProps {
    profile: Profile;
}

export default function Welcome() {
    const { auth } = usePage().props;
    const { profile } = usePage<MainPageProps>().props;
    return (
        <>
            <div
                className="container"
                style={{
                    backgroundColor: '#1C1C1C',
                    width: '100%',
                    height: '100%',
                }}
            >
                <div className="row">
                    <div className="border-end col-3">
                        <div className="d-flex flex-column mt-4 gap-4">
                            <Palette size={30} color="beige" />
                        </div>
                        <div
                            className="mt-6 flex flex-col gap-15"
                            style={{ color: '#A3B18A' }}
                        >
                            <button className="text-beige flex cursor-pointer items-center gap-3 rounded-md border-b-2 border-dashed border-white hover:border-[#D6C7A1] hover:bg-[#2A2A2A] hover:text-[#D6C7A1]">
                                <University size={25} color="beige" />
                                <span
                                    style={{
                                        fontFamily: 'Papyrus',
                                        paddingLeft: '5px',
                                        fontSize: '20px',
                                    }}
                                >
                                    Home
                                </span>
                            </button>

                            <button className="text-beige flex cursor-pointer items-center gap-3 rounded-md border-b-2 border-dashed border-white hover:border-[#D6C7A1] hover:bg-[#2A2A2A] hover:text-[#D6C7A1]">
                                <Fish size={25} color="beige" />
                                <span
                                    style={{
                                        fontFamily: 'Papyrus',
                                        paddingLeft: '5px',
                                        fontSize: '20px',
                                    }}
                                >
                                    Explore
                                </span>
                            </button>

                            <button className="text-beige flex cursor-pointer items-center gap-3 rounded-md border-b-2 border-dashed border-white hover:border-[#D6C7A1] hover:bg-[#2A2A2A] hover:text-[#D6C7A1]">
                                <CloudAlert size={25} color="beige" />
                                <span
                                    style={{
                                        fontFamily: 'Papyrus',
                                        paddingLeft: '5px',
                                        fontSize: '20px',
                                    }}
                                >
                                    Notifications
                                </span>
                            </button>

                            <button className="text-beige flex cursor-pointer items-center gap-3 rounded-md border-b-2 border-dashed border-white hover:border-[#D6C7A1] hover:bg-[#2A2A2A] hover:text-[#D6C7A1]">
                                <Star size={25} color="beige" />
                                <span
                                    style={{
                                        fontFamily: 'Papyrus',
                                        paddingLeft: '5px',
                                        fontSize: '20px',
                                    }}
                                >
                                    Favorites
                                </span>
                            </button>

                            <button className="text-beige flex cursor-pointer items-center gap-3 rounded-md border-b-2 border-dashed border-white hover:border-[#D6C7A1] hover:bg-[#2A2A2A] hover:text-[#D6C7A1]">
                                <CircleUserRound size={25} color="beige" />
                                <span
                                    style={{
                                        fontFamily: 'Papyrus',
                                        paddingLeft: '5px',
                                        fontSize: '20px',
                                    }}
                                >
                                    Profile
                                </span>
                            </button>
                            <button className="text-beige flex cursor-pointer items-center gap-3 rounded-md border-b-2 border-dashed border-white hover:border-[#D6C7A1] hover:bg-[#2A2A2A] hover:text-[#D6C7A1]">
                                <Minus size={25} color="beige" />
                                <span
                                    style={{
                                        fontFamily: 'Papyrus',
                                        paddingLeft: '5px',
                                        fontSize: '20px',
                                    }}
                                >
                                    More...
                                </span>
                            </button>
                        </div>
                    </div>
                    <div
                        className="border-end col-6 py-4"
                        style={{ color: '#A3B18A' }}
                    >
                        <div className="border-bottom p-3">
                            <span
                                className="mb-3 ml-18"
                                style={{
                                    color: '#A3B18A',
                                    fontFamily: 'Arial',
                                }}
                            >
                                @{profile.username}
                            </span>
                            <div className="d-flex align-items-center gap-3">
                                <img
                                    src={profile.avatar}
                                    alt="avatar"
                                    style={{
                                        width: '55px',
                                        height: '55px',
                                        borderRadius: '50%',
                                    }}
                                />

                                <input
                                    type="text"
                                    className="form-control fs-5 border-0"
                                    placeholder="What's up?"
                                    style={{
                                        backgroundColor: '#838282',
                                        borderRadius: '20px',
                                        height: '48px',
                                        boxShadow: 'none',
                                        fontFamily: 'Papyrus',
                                    }}
                                />
                            </div>
                            <div className="d-flex mt-3 gap-4 ps-120">
                                <button className="rounded-md hover:rounded-xl hover:border-[#D6C7A1] hover:bg-[#838282] hover:text-[#D6C7A1]">
                                    <Image size={22} color="beige" />
                                </button>
                                <button className="rounded-md hover:rounded-xl hover:border-[#D6C7A1] hover:bg-[#838282] hover:text-[#D6C7A1]">
                                    <Smile size={22} color="beige" />
                                </button>
                                <button className="rounded-md hover:rounded-xl hover:border-[#D6C7A1] hover:bg-[#838282] hover:text-[#D6C7A1]">
                                    <Send size={22} color="beige" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-4" style={{ fontFamily: 'Papyrus' }}>
                            <p>posts will be here...</p>
                        </div>
                    </div>
                </div>

                <div className="border-start bo col-3">
                    <div
                        className="border-bottom w-[18%] p-3"
                        style={{ position: 'absolute', top: 80, right: 199 }}
                    >
                        <input
                            style={{
                                backgroundColor: '#838282',
                                borderRadius: '20px',
                                height: '48px',
                                boxShadow: 'none',
                                fontFamily: 'Papyrus',
                            }}
                            type="text"
                            placeholder="Search..."
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
