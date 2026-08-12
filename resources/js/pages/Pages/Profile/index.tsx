import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import { Search, ArrowLeft } from 'lucide-react';

const profile = {
    name: 'Alxay',
    username: 'Alxay7',
    posts: 146,
    bio: 'Just a regular user of X',
    location: 'Poland',
    joined: 'January 2023',
    following: 45,
    followers: 22,
    banner: 'https://pbs.twimg.com/profile_banners/1640331781953007618/1732477446/1500x500',
    avatar: 'https://pbs.twimg.com/profile_images/1846828557575577600/uxRhcxvO_400x400.jpg',
};

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <main className="w-1/3 flex-col self-center">
                {/* Profile Header */}
                <div
                    id="profileHeader"
                    className="flex h-16 w-full items-center gap-4 border-b border-zinc-800 px-4"
                >
                    <ArrowLeft />
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">{profile.name}</h2>
                        <p className="text-sm text-zinc-500">
                            {profile.posts} wpisów
                        </p>
                    </div>
                    <Search className="ml-auto" />
                </div>
                <div id="profile" className="flex flex-col gap-4 px-4">
                    {/* Profile Banner */}
                    <div className="relative w-full">
                        {/* Banner */}
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={profile.banner}
                                alt="Profile Banner"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        {/* Avatar */}
                        <div className="absolute -bottom-20 left-4">
                            <img
                                className="h-40 w-40 rounded-full border-4 border-black object-cover"
                                src={profile.avatar}
                                alt="Profile Avatar"
                            />
                        </div>
                    </div>

                    <button className="border rounded-3xl border-white ml-auto bg-transparent px-4 py-2 text-white hover:bg-white/10">
                        Edit Profile
                    </button>
                    <div id="names">
                        <h3 className="text-xl font-bold">{profile.name}</h3>
                        <h2 className="text-lg text-zinc-500">
                            @{profile.username}
                        </h2>
                    </div>
                    <div id="bio">
                        <p>{profile.bio}</p>
                    </div>
                    <div id="location" className="flex gap-4 text-zinc-500">
                        <p>Location: {profile.location}</p>
                        <p>Joined: {profile.joined}</p>
                    </div>
                    <div id="follow" className="flex gap-4 text-zinc-500">
                        <p>
                            <span className="text-white">
                                {profile.following}{' '}
                            </span>
                            Following
                        </p>
                        <p>
                            <span className="text-white">
                                {profile.followers}{' '}
                            </span>
                            Followers
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
