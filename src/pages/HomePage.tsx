
export default function HomePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline text-center mt-10">Welcome to My Portfolio</h1>
            <p className="text-center mt-4">This is a simple portfolio page built with React and Tailwind CSS.</p>
            <div className="flex justify-center mt-10">
                <img src="/path/to/your/image.jpg" alt="Portfolio" className="rounded-lg shadow-lg w-1/2" />
            </div>
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-semibold">About Me</h2>
                <p className="mt-4">I am a passionate developer with experience in building web applications.</p>
                <p className="mt-2">I love to learn new technologies and improve my skills.</p>
            </div>
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <p className="mt-4">Here are some of my projects:</p>
                <ul className="list-disc list-inside mt-4">
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </div>
        </div>
    )
}
