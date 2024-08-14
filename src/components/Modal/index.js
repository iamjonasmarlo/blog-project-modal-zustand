'use client';

import useModalStore from '@/lib/store/modalStore';

export default function Modal() {
    const { open, setOpen } = useModalStore();

    return (
        <>
            {open && (
                <div className="fixed top-0 left-0 size-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
                    <div className="fixed rounded-lg bg-white p-6 shadow-xl max-w-sm w-full text-center">
                        <div className="text-base font-semibold text-gray-900">Get in touch</div>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                                amet labore.
                            </p>
                        </div>
                        <button
                            className="w-full mt-8 rounded-md bg-indigo-600 text-white px-3.5 py-2.5 shadow-sm hover:bg-indigo-500 text-sm"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            Modal schließen
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
