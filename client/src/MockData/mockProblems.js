const problems = [
	{
		id: 1,
		Problem_Name: 'Palindrome Checker',
		Uploaded_By: 'user1',
		Date_Uploaded_On: '2023-08-01',
		Problem_Data: `
$$
\documentclass{article}
\\usepackage{amsmath}

\begin{document}

\section*{Problem Statement}

\problemname{Exam}

You and your friend have just taken a True/False exam. 
Your friend has been to see the instructor, 
so they know how many answers they got right (but not which ones).
You compare notes: 
you know your answers and your friend's answers. 
What is the maximum number of answers you could have gotten right?

\section*{Input}

Each input will consist of a single test case. Note that your program may be run multiple
times on different inputs.
Each test case will begin with a line containing a single integer $n$ ($0\leq n\leq 1000$), 
which is the number of answers your friend got right on the exam.
Each of the next two lines will contain a string 
$s$ ($\max[n,1] \leq |s| \leq 1000,\ s \in \{T,F\}^*$). 
The two strings will be of the same length. 
The first line represents your answers; 
the second line represents your friend's answers. 
The order of answers is the same in both strings:
the first letter is the answer to question 1, the second to question 2, and so on.

\section*{Output}

Output a single integer, which is the maximum number of answers you could have
gotten right.

\end{document}

$$
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 2,
		Problem_Name: 'Fibonacci Sequence',
		Uploaded_By: 'user2',
		Date_Uploaded_On: '2023-08-03',
		Problem_Data: `
        **Description:**
        
        Implement a function that generates the first N numbers of the Fibonacci sequence.

        **Input:**
        
        - Input is a positive integer N.

        **Output:**
        
        - Return an array containing the first N numbers of the Fibonacci sequence.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 3,
		Problem_Name: 'Factorial Calculator',
		Uploaded_By: 'user3',
		Date_Uploaded_On: '2023-08-05',
		Problem_Data: `
        **Description:**
        
        Write a function to calculate the factorial of a given integer.

        **Input:**
        
        - Input is a non-negative integer.

        **Output:**
        
        - Return the factorial of the input number.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 4,
		Problem_Name: 'Prime Number Checker',
		Uploaded_By: 'user1',
		Date_Uploaded_On: '2023-08-10',
		Problem_Data: `
        **Description:**
        
        Implement a function to check if a given number is prime.

        **Input:**
        
        - Input is a positive integer.

        **Output:**
        
        - Return true if the input number is prime, false otherwise.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 5,
		Problem_Name: 'String Reversal',
		Uploaded_By: 'user4',
		Date_Uploaded_On: '2023-08-15',
		Problem_Data: `
        **Description:**
        
        Write a function that reverses a given string.

        **Input:**
        
        - Input is a string.

        **Output:**
        
        - Return the reversed string.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 6,
		Problem_Name: 'Array Sum',
		Uploaded_By: 'user2',
		Date_Uploaded_On: '2023-08-18',
		Problem_Data: `
        **Description:**
        
        Implement a function that calculates the sum of all elements in an array.

        **Input:**
        
        - Input is an array of numbers.

        **Output:**
        
        - Return the sum of the array elements.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 7,
		Problem_Name: 'Fibonacci Sequence Generator',
		Uploaded_By: 'user5',
		Date_Uploaded_On: '2023-08-20',
		Problem_Data: `
        **Description:**
        
        Create a function that generates the Fibonacci sequence up to a given limit.

        **Input:**
        
        - Input is a positive integer representing the limit.

        **Output:**
        
        - Return an array containing the Fibonacci sequence up to the given limit.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 8,
		Problem_Name: 'Unique Characters in a String',
		Uploaded_By: 'user3',
		Date_Uploaded_On: '2023-08-23',
		Problem_Data: `
        **Description:**
        
        Implement a function to determine if a string has all unique characters.

        **Input:**
        
        - Input is a string.

        **Output:**
        
        - Return true if all characters in the string are unique, false otherwise.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 9,
		Problem_Name: 'Rock, Paper, Scissors Game',
		Uploaded_By: 'user6',
		Date_Uploaded_On: '2023-08-25',
		Problem_Data: `
        **Description:**
        
        Create a simple text-based Rock, Paper, Scissors game.

        **Input:**
        
        - Input is a player's choice (Rock, Paper, or Scissors).

        **Output:**
        
        - Determine the winner of the game (Player vs. Computer).
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 10,
		Problem_Name: 'Temperature Converter',
		Uploaded_By: 'user1',
		Date_Uploaded_On: '2023-08-30',
		Problem_Data: `
        **Description:**
        
        Implement a temperature converter that converts between Fahrenheit and Celsius.

        **Input:**
        
        - Input is a temperature value and the unit of measurement.

        **Output:**
        
        - Return the converted temperature in the other unit.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 11,
		Problem_Name: 'Word Count in a String',
		Uploaded_By: 'user7',
		Date_Uploaded_On: '2023-09-02',
		Problem_Data: `
        **Description:**
        
        Write a function that counts the number of words in a given string.

        **Input:**
        
        - Input is a string.

        **Output:**
        
        - Return the count of words in the string.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 12,
		Problem_Name: 'Matrix Multiplication',
		Uploaded_By: 'user8',
		Date_Uploaded_On: '2023-09-05',
		Problem_Data: `
        **Description:**
        
        Implement a function to multiply two matrices.

        **Input:**
        
        - Input is two matrices represented as 2D arrays.

        **Output:**
        
        - Return the result of the matrix multiplication.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 13,
		Problem_Name: 'Anagram Checker',
		Uploaded_By: 'user2',
		Date_Uploaded_On: '2023-09-10',
		Problem_Data: `
        **Description:**
        
        Write a function that checks if two strings are anagrams of each other.

        **Input:**
        
        - Input is two strings.

        **Output:**
        
        - Return true if the strings are anagrams, false otherwise.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 14,
		Problem_Name: 'Binary Search',
		Uploaded_By: 'user4',
		Date_Uploaded_On: '2023-09-15',
		Problem_Data: `
        **Description:**
        
        Implement a binary search algorithm to find an element in a sorted array.

        **Input:**
        
        - Input is a sorted array and a target element.

        **Output:**
        
        - Return the index of the target element in the array or -1 if not found.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 15,
		Problem_Name: 'Linked List Operations',
		Uploaded_By: 'user3',
		Date_Uploaded_On: '2023-09-20',
		Problem_Data: `
        **Description:**
        
        Create a class for a singly linked list and implement basic operations.

        **Input:**
        
        - Input varies based on the operation (e.g., add, remove, search).

        **Output:**
        
        - Perform the requested operation on the linked list.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 16,
		Problem_Name: 'Chessboard Validator',
		Uploaded_By: 'user1',
		Date_Uploaded_On: '2023-09-25',
		Problem_Data: `
        **Description:**
        
        Write a function to validate if a given chessboard configuration is valid.

        **Input:**
        
        - Input is a 2D array representing the chessboard.

        **Output:**
        
        - Return true if the configuration is valid, false otherwise.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 17,
		Problem_Name: 'Text Encryption',
		Uploaded_By: 'user7',
		Date_Uploaded_On: '2023-09-30',
		Problem_Data: `
        **Description:**
        
        Implement a text encryption and decryption algorithm.

        **Input:**
        
        - Input is a text message and an encryption key.

        **Output:**
        
        - Return the encrypted or decrypted message.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 18,
		Problem_Name: 'To-Do List Application',
		Uploaded_By: 'user8',
		Date_Uploaded_On: '2023-10-05',
		Problem_Data: `
        **Description:**
        
        Create a simple To-Do list application with basic features.

        **Input:**
        
        - Input varies based on the operation (e.g., add, remove, list tasks).

        **Output:**
        
        - Perform the requested operation on the To-Do list.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 19,
		Problem_Name: 'Image Processing',
		Uploaded_By: 'user9',
		Date_Uploaded_On: '2023-10-10',
		Problem_Data: `
        **Description:**
        
        Develop a function to apply basic image processing operations.

        **Input:**
        
        - Input is an image and the desired processing operation.

        **Output:**
        
        - Return the processed image.
    `,
		Link_To_File: 'https://google.com',
	},
	{
		id: 20,
		Problem_Name: 'Calculator Application',
		Uploaded_By: 'user10',
		Date_Uploaded_On: '2023-10-15',
		Problem_Data: `
        **Description:**
        
        Build a simple calculator application with basic arithmetic operations.

        **Input:**
        
        - Input is mathematical expressions to be evaluated.

        **Output:**
        
        - Return the result of the calculation.
    `,
		Link_To_File: 'https://google.com',
	},
]

export default problems
