import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import axios from 'axios'
import ProblemFormatInfo from '@/components/UploadPageComponents/ProblemFormatInfo'

const LoadingSpinner = () => (
	<div className="flex items-center justify-center">
		<div className="h-20 w-20 animate-spin rounded-full border-b-2 border-t-2 border-phLinen"></div>
	</div>
)

const Upload = () => {
	const [selectedFile, setSelectedFile] = useState('')
	const [showProblemFormat, setShowProblemFormat] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [isUploading, setIsUploading] = useState(false)
	const router = useRouter()

	useEffect(() => {
		if (!Cookies.get('accessToken')) router.push('/signin?alertCompulsory=true')
	}, [])

	const handleFileChange = (e) => {
		if (e.target.files[0]) {
			// You can access the selected file using `selectedFile`.
			// You can perform further actions with the file here.
			setSelectedFile(e.target.files[0])
		}
	}

	const uploadProblem = async () => {
		setErrorMessage('')
		try {
			if (!selectedFile) {
				setErrorMessage('Please select a file to upload.')
				return
			}
			setIsUploading(true)
			const formData = new FormData()
			formData.append('file', selectedFile)

			const response = await axios.post(
				`${process.env.BACKEND_API_URL}/upload/`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data', // Important for file upload
						Authorization: `Bearer ${Cookies.get('accessToken')}`, // Include your access token here
					},
				},
			)
			setIsUploading(false)
			setSelectedFile('')
			console.log('File uploaded successfully:', response.data)
		} catch (error) {
			console.error('Upload failed: ', error)
			setIsUploading(false)
			if (error.response) {
				if (error.response.status === 401)
					setErrorMessage('Invalid username or password.')
				else setErrorMessage(error.response.data.detail)
			} else setErrorMessage('An error occured.')
		}
	}

	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value)
	}

	const toggleProblemFormat = () => {
		setShowProblemFormat(!showProblemFormat)
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
						{isUploading ? (
							<LoadingSpinner />
						) : (
							<>
								<div className="flex">
									<input
										type="file"
										accept=".zip"
										className="hidden"
										id="fileInput"
										onChange={handleFileChange}
									/>
									<label
										htmlFor="fileInput"
										className="cursor-pointer rounded-lg bg-phDarkgrey px-4 py-2 text-phLinen hover:bg-gray-600"
									>
										Select File
									</label>
									<button
										className="ml-2 cursor-pointer rounded-lg bg-phGreen px-4 py-2 text-phLinen hover:bg-gray-600"
										onClick={uploadProblem}
									>
										Upload Problem
									</button>
								</div>
								{selectedFile && (
									<p className="mt-4 text-center ">
										Selected file:{' '}
										<span className="underline">{selectedFile.name}</span>
									</p>
								)}

								<p className="text-red-600">{errorMessage}</p>
							</>
						)}

						<p className="mt-4 text-center">
							Note: Please follow the problem-tools format for structuring the
							problems (must be directly inside a zip file).{' '}
							<a
								className="ml-2 cursor-pointer text-phLinen underline hover:text-phGreen"
								onClick={toggleProblemFormat}
							>
								Click here to see the correct Problem Tools Format!
							</a>
						</p>
						{showProblemFormat && <ProblemFormatInfo />}
					</div>
				</div>
			</div>
		</>
	)
}

export default Upload
