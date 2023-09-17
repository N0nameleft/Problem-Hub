import Navbar from '@/components/Navbar'
import problems from '../MockData/mockProblems'

function HomePage() {
	return (
		<>
			<Navbar />
			<div className="h-screen bg-phDarkgrey px-48 pt-24">
				<div className="absolute bottom-0 left-0 right-0 top-0 mx-48 mt-24 h-auto">
					<h2 className="text-white">Find problems</h2>
					<div className=" h-full border-4 border-phDarkergrey bg-phGreen"></div>
				</div>
			</div>
		</>
	)
}
export default HomePage
