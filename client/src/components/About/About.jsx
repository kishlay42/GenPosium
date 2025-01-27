export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.pinimg.com/736x/0b/eb/cc/0bebccd77af6e938a0fdcf4fbe8b1289.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Join the communtity and Innovate new ideas together
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Join the GenPosium community and be a part of a vibrant network of innovators. Collaborate, share ideas, and drive forward new innovations together. Let&apos;s create the future, one idea at a time.

                        </p>
                        <p className="mt-4 text-gray-600">
                        By joining GenPosium, you gain access to a community that values creativity and innovation. Work together with like-minded individuals to bring your ideas to life and make a real impact.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}