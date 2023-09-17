import React from 'react'
import Navbar from '../components/Navbar'

const Upload = () => {
    const [selectedFile, setSelectedFile] = React.useState('');

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0]

		if (selectedFile) {
			// You can access the selected file using `selectedFile`.
			// You can perform further actions with the file here.
			setSelectedFile(`Selected File: ${selectedFile.name}`);
		}
	}

	return (
		<>
			<Navbar />
			<div className="flex min-h-screen items-center justify-center bg-phDarkgrey">
				<div className="w-full max-w-md">
					<div className="rounded-t-lg border-b-2 border-black bg-phGreen py-4 text-center  font-manjari text-2xl text-phLinen">
						Upload a Contest Problem
					</div>
					{/*make a button underneath that says "Select File" and when you click it, it takes you to a file explorer and you can select a file to upload*/}
					<div className="flex flex-col items-center rounded-b-lg bg-phDarkergrey p-4 text-white">
						<input
							type="file"
							accept=".zip" // Specify the file type you want to accept (in this case, .zip)
							className="hidden" // Hide the input visually
							id="fileInput" // Add an ID to the input element
							onChange={handleFileChange} // Call a function when the file selection changes
						/>
						<label
							htmlFor="fileInput"
							className="cursor-pointer rounded-lg bg-phDarkgrey px-4 py-2 text-phLinen hover:bg-gray-600"
						>
							Select File
						</label>
						<p className="mt-4 text-center">{selectedFile}</p>
						<p className="mt-4 text-center">
							Note: Please follow the problem-tools format for structuring the
							problems (must be directly inside a zip file).
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Upload
