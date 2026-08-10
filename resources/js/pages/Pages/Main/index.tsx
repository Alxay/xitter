import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <div>
                <span>siupsiup</span>
            </div>
            <div>
                <span>siupsiup</span>
            </div>
            <div>
                <span>siupsiup</span>
            </div>
        </>
    );
}
