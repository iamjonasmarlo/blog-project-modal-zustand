'use client';

import useModalStore from '@/lib/store/modalStore';

export default function Contact() {
    const { open, setOpen } = useModalStore();

    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-xl mx-auto text-center py-20">
                <h2 className="text-4xl font-bold leading-tight mb-6 text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="text-lg text-gray-600">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam
                    aliqua proident excepteur commodo do ea.
                </p>
                <button
                    className="mt-10 rounded-md bg-indigo-600 text-white px-3.5 py-2.5 shadow-sm hover:bg-indigo-500 text-sm"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Modal öffnen
                </button>
            </div>
        </section>
    );
}
