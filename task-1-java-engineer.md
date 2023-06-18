### Question : 
Assuming we have a large set of patients (500,000+) in a relational database, we want the user
to type part of a patient name and the system returns a list of matched patients.

1. What data structure and search/matching algorithm to use and why?
2. How fast the search is using this algorithm and data structure?
3. Additional approaches from any point of view are acceptable to achieve best
performance result

### Answers :
1. Data Structure: Trie (Prefix Tree)
A Trie is a tree-like data structure that organizes strings by their characters. It's like a tree where each node represents a letter, and the edges connect the letters to form words. Using a Trie for patient names allows for quick matching of partial names because we can follow the tree based on the characters the user types, narrowing down the search as we go.

2. Search/Matching Algorithm: Trie-based Search
The search algorithm involves following the Trie based on the characters typed by the user. We move down the tree, matching each character the user types. When the user finishes typing or pauses, we mark the last visited node as the end of a name and gather all the patient names below that node.

3. Performance of the Algorithm and Data Structure
The Trie-based search is efficient and fast. It's great for finding matching patients quickly because it only depends on the length of the input, not the number of patients in the database. This means the search speed remains relatively constant, regardless of the database size. The Trie scales well and handles large datasets efficiently.
