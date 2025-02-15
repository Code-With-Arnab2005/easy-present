import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-auto">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
                {/* Left side: App name or logo */}
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-semibold">Attendance Tracker</h2>
                    <p className="text-sm mt-2">Simplifying your attendance process</p>
                </div>

                {/* Center: Navigation links */}
                <div className="flex flex-col sm:flex-row gap-6 mt-6 sm:mt-0">
                    <a href="/about" className="hover:text-green-500">About</a>
                    <a href="/privacy" className="hover:text-green-500">Privacy Policy</a>
                    <a href="/terms" className="hover:text-green-500">Terms of Service</a>
                </div>

                {/* Right side: Social media or contact */}
                <div className="mt-6 sm:mt-0">
                    <p className="text-sm">Follow us on:</p>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                        <a href="https://facebook.com"><img width={30} className='rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="img" /></a>
                        <a href="https://twitter.com"><img width={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="img" /></a>
                        <a href="https://linkedin.com"><img width={30} src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="img" /></a>
                    </div>
                </div>
            </div>

            {/* Bottom text */}
            <div className="mt-6 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Attendance Tracker. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
