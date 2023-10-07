// Sample JSON data (replace this with your actual data)
const problemsData = [
	// ... Your JSON data here ...
	{
		id: 1,
		Problem_Name: 'Palindrome Checker',
		Uploaded_By: 'user1',
		Date_Uploaded_On: '2023-08-01',
		Problem_Data:
			"\\documentclass{article}\n\\usepackage{amsmath}\\begin{document}\n\n\\section*{Problem Statement}\n\n\\problemname{Exam}\n\nYou and your friend have just taken a True/False exam. \nYour friend has been to see the instructor, \nso they know how many answers they got right (but not which ones).\nYou compare notes: \nyou know your answers and your friend's answers. \nWhat is the\nmaximum number of answers you could have gotten right?\n\n\\section*{Input}\n\nEach input will consist of a single test case. Note that your program may be run multiple\ntimes on different inputs.\nEach test case will begin with a line containing a single integer $n$ ($0\\leq n\\leq 1000$), \nwhich is the number of answers your friend got right on the exam.\nEach of the next two lines will contain a string \n$s$ ($\\max[n,1] \\leq |s| \\leq 1000,\\ s \\in \\{T,F\\}^*$). \nThe two strings will be of the same length. \nThe first line represents your answers; \nthe second line represents your friend's answers. \nThe order of answers is the same in both strings:\nthe first letter is the answer to question 1, the second to question 2, and so on.\n\n\\section*{Output}\n\nOutput a single integer, which is the maximum number of answers you could have\ngotten right.\n\n\\end{document}\n",
		Link_To_File: 'https://google.com',
	},
	{
		id: 2,
		Problem_Name: 'Fibonacci Sequence', 
		Uploaded_By: 'user2',
		Date_Uploaded_On: '2023-08-03',
		Problem_Data:
			'**Description:**\n\nImplement a function that generates the first N numbers of the Fibonacci sequence.\n\n**Input:**\n\n- Input is a positive integer N.\n\n**Output:**\n\n- Return an array containing the first N numbers of the Fibonacci sequence.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 3,
		Problem_Name: 'Factorial Calculator',
		Uploaded_By: 'user3',
		Date_Uploaded_On: '2023-08-05',
		Problem_Data:
			'**Description:**\n\nWrite a function to calculate the factorial of a given integer.\n\n**Input:**\n\n- Input is a non-negative integer.\n\n**Output:**\n\n- Return the factorial of the input number.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 4,
		Problem_Name: 'Prime Number Checker',
		Uploaded_By: 'user1',
		Date_Uploaded_On: '2023-08-10',
		Problem_Data:
			'**Description:**\n\nImplement a function to check if a given number is prime.\n\n**Input:**\n\n- Input is a positive integer.\n\n**Output:**\n\n- Return true if the input number is prime, false otherwise.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 5,
		Problem_Name: 'String Reversal',
		Uploaded_By: 'user4',
		Date_Uploaded_On: '2023-08-15',
		Problem_Data:
			'**Description:**\n\nWrite a function that reverses a given string.\n\n**Input:**\n\n- Input is a string.\n\n**Output:**\n\n- Return the reversed string.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 6,
		Problem_Name: 'Array Sum',
		Uploaded_By: 'user2',
		Date_Uploaded_On: '2023-08-18',
		Problem_Data:
			'**Description:**\n\nImplement a function that calculates the sum of all elements in an array.\n\n**Input:**\n\n- Input is an array of numbers.\n\n**Output:**\n\n- Return the sum of the array elements.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 7,
		Problem_Name: 'Fibonacci Sequence Generator',
		Uploaded_By: 'user5',
		Date_Uploaded_On: '2023-08-20',
		Problem_Data:
			'**Description:**\n\nCreate a function that generates the Fibonacci sequence up to a given limit.\n\n**Input:**\n\n- Input is a positive integer representing the limit.\n\n**Output:**\n\n- Return an array containing the Fibonacci sequence up to the given limit.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 8,
		Problem_Name: 'Unique Characters in a String',
		Uploaded_By: 'user3',
		Date_Uploaded_On: '2023-08-23',
		Problem_Data:
			'**Description:**\n\nImplement a function to determine if a string has all unique characters.\n\n**Input:**\n\n- Input is a string.\n\n**Output:**\n\n- Return true if all characters in the string are unique, false otherwise.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 9,
		Problem_Name: 'Rock, Paper, Scissors Game',
		Uploaded_By: 'user6',
		Date_Uploaded_On: '2023-08-25',
		Problem_Data:
			"**Description:**\n\nCreate a simple text-based Rock, Paper, Scissors game.\n\n**Input:**\n\n- Input is a player's choice (Rock, Paper, or Scissors).\n\n**Output:**\n\n- Determine the winner of the game (Player vs. Computer).",
		Link_To_File: 'https://google.com',
	},
	{
		id: 10,
		Problem_Name: 'Temperature Converter',
		Uploaded_By: 'user1',
		Date_Uploaded_On: '2023-08-30',
		Problem_Data:
			'**Description:**\n\nImplement a temperature converter that converts between Fahrenheit and Celsius.\n\n**Input:**\n\n- Input is a temperature value and the unit of measurement.\n\n**Output:**\n\n- Return the converted temperature in the other unit.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 11,
		Problem_Name: 'Word Count in a String',
		Uploaded_By: 'user7',
		Date_Uploaded_On: '2023-09-02',
		Problem_Data:
			'**Description:**\n\nWrite a function that counts the number of words in a given string.\n\n**Input:**\n\n- Input is a string.\n\n**Output:**\n\n- Return the count of words in the string.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 12,
		Problem_Name: 'Matrix Multiplication',
		Uploaded_By: 'user8',
		Date_Uploaded_On: '2023-09-05',
		Problem_Data:
			'**Description:**\n\nImplement a function to multiply two matrices.\n\n**Input:**\n\n- Input is two matrices represented as 2D arrays.\n\n**Output:**\n\n- Return the result of the matrix multiplication.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 13,
		Problem_Name: 'Anagram Checker',
		Uploaded_By: 'user2',
		Date_Uploaded_On: '2023-09-10',
		Problem_Data:
			'**Description:**\n\nWrite a function that checks if two strings are anagrams of each other.\n\n**Input:**\n\n- Input is two strings.\n\n**Output:**\n\n- Return true if the strings are anagrams, false otherwise.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 14,
		Problem_Name: 'Binary Search',
		Uploaded_By: 'user4',
		Date_Uploaded_On: '2023-09-15',
		Problem_Data:
			'**Description:**\n\nImplement a binary search algorithm to find an element in a sorted array.\n\n**Input:**\n\n- Input is a sorted array and a target element.\n\n**Output:**\n\n- Return the index of the target element in the array or -1 if not found.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 15,
		Problem_Name: 'Linked List Operations',
		Uploaded_By: 'user3',
		Date_Uploaded_On: '2023-09-20',
		Problem_Data:
			'**Description:**\n\nCreate a class for a singly linked list and implement basic operations.\n\n**Input:**\n\n- Input varies based on the operation (e.g., add, remove, search).\n\n**Output:**\n\n- Perform the requested operation on the linked list.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 16,
		Problem_Name: 'Chessboard Validator',
		Uploaded_By: 'user1',
		Date_Uploaded_On: '2023-09-25',
		Problem_Data:
			'**Description:**\n\nWrite a function to validate if a given chessboard configuration is valid.\n\n**Input:**\n\n- Input is a 2D array representing the chessboard.\n\n**Output:**\n\n- Return true if the configuration is valid, false otherwise.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 17,
		Problem_Name: 'Text Encryption',
		Uploaded_By: 'user7',
		Date_Uploaded_On: '2023-09-30',
		Problem_Data:
			'**Description:**\n\nImplement a text encryption and decryption algorithm.\n\n**Input:**\n\n- Input is a text message and an encryption key.\n\n**Output:**\n\n- Return the encrypted or decrypted message.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 18,
		Problem_Name: 'To-Do List Application',
		Uploaded_By: 'user8',
		Date_Uploaded_On: '2023-10-05',
		Problem_Data:
			'**Description:**\n\nCreate a simple To-Do list application with basic features.\n\n**Input:**\n\n- Input varies based on the operation (e.g., add, remove, list tasks).\n\n**Output:**\n\n- Perform the requested operation on the To-Do list.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 19,
		Problem_Name: 'Image Processing',
		Uploaded_By: 'user9',
		Date_Uploaded_On: '2023-10-10',
		Problem_Data:
			'**Description:**\n\nDevelop a function to apply basic image processing operations.\n\n**Input:**\n\n- Input is an image and the desired processing operation.\n\n**Output:**\n\n- Return the processed image.',
		Link_To_File: 'https://google.com',
	},
	{
		id: 20,
		Problem_Name: 'Calculator Application',
		Uploaded_By: 'user10',
		Date_Uploaded_On: '2023-10-15',
		Problem_Data:
			'**Description:**\n\nBuild a simple calculator application with basic arithmetic operations.\n\n**Input:**\n\n- Input is mathematical expressions to be evaluated.\n\n**Output:**\n\n- Return the result of the calculation.',
		Link_To_File: 'https://google.com',
	},
]

export default function handler(req, res) {
	res.status(200).json(problemsData)
}
