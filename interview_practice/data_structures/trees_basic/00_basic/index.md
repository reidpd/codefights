Trees: Basic
Interview Essentials
A tree is a data structure composed of parent and child nodes. Each node contains a value and a list of references to its child nodes. Trees borrow a lot of language from nature (each tree has a root node and leaf nodes) and from family trees (there are parent and child nodes).

Tree traversal problems are extremely common in technical interviews, so you need to be very familiar with how to do so. You’ll also run into situations in which you need to implement a tree yourself. Trees are particularly useful for storing sorted data that needs to be retrieved quickly, or for representing hierarchical data.

Crucial Terms
The tree is a collection of nodes that contain the data we want to store. In addition, the nodes have a collection of pointers to other nodes. The nodes referenced by the pointers inside X are referred to as the children of X.

Child: The children of node X are the nodes X has a pointer to.
Parent: The parent of a node X is the node that has X as a child.

These two definitions tell us that if X is a parent of Y, then Y is a child of X.
Siblings: A group of nodes that have the same parent node.
Descendant: A node Y is a descendent of X if, starting at X, you can reach Y by following a series of child pointers. (Children are included as descendants of nodes.)
Ancestor: A node X is an ancestor of Y if Y is a descendant of X.
In addition to terms describing the nodes in the tree, there are also some terms about the different parts of the tree.

Root: The top node of a tree, and the only node that does not have a parent node. All other nodes in our tree are descendants of the root (and the root is an ancestor of all other nodes in the tree).
Level: The level of a node X is the number of child pointers that need to be followed to get to X from the root. All the nodes at level 1 are children of the root, the nodes at level 2 are children of nodes at level 1, et cetera.
Leaf: Nodes that do not have any child nodes.
Height of a tree: The maximum level in the tree (i.e. the level of the node furthest from the root).
Depth: Confusingly, this is a synonm for the height of a tree! Computer scientists typically draw the root node at the top of the page and work their way down, so increasing levels means going down the page.
Branching factor: The maximum number of children that any node has.
There are many different types of trees that have their own terminology associated with them (such as Red-Black Trees, and AVL trees). Many of the different types of trees differ in their approach to balancing the tree. Balancing refers to inserting entries into a sorted tree in such a way that minimizes the tree's depth. While many of these trees are quite esoteric for an interview, you must know the terminology for a binary search tree (BST). A BST is a sorted tree with a branching factor of two (i.e. every node has at most two children, referred to as the left and right nodes due to the way they are drawn). A BST requires that the left node has a value smaller than its parent, while the right node has a value larger than its parent.

Tree Basics
For a collection of nodes to be a non-empty tree, they need to satisfy 4 conditions:

There needs to be exactly one root node (i.e. one node with no parent).
Each node that is not the root node has only one parent node (i.e. no node is a child of two or more nodes)
You need to be able to reach each node by starting at the root and following a sequence of "child" pointers.
A node at level x cannot have a child at a level less than x.
(In fact, all children of a node at level x have a level of x+1, because children of a node at level x are one extra step from the root.)
Strengths & Weaknesses
Strengths
Trees are very memory-efficient and do not use more memory than they need to.
Trees are more flexible than simple arrays because we can balance the tree (find the best organization for the expected use of the data).
Trees can naturally grow to hold an arbitrary number of objects.
By keeping the height of the tree small in a sorted tree, searches can be very fast (searches start at the root, and in a sorted tree and look at O(tree height) nodes when searching).
The heirarchy of a tree is reflected in many problems we would try and model (such as representing a company heirarchy, or files on a computer, or breaking down expenses by categories followed by subcategories and line-items).
Decision trees are a special type of tree used to model the effects of different choices. The nodes are the state of the system; a node Y is a child of X if it is possible to make a single decision from state X to transform to state Y. Decision trees are often used when analyizing strategy games, such as Chess.
Weaknesses
Is harder to debug.
Manipulations can require through understanding of recursion.
Have to make decisions how to balance the data based on expected use case, and rearranging the tree completely (e.g. sorting on a different attribute) is expensive. For example, it wouldn't be the best data structure for storing information about people if you expected users to sort frequently by either name or age.
In Interviews, Use Trees When...
You have data that is sorted in some way, and you want to do a lot of searches on it.
You need to manage objects that are clustered or grouped by some attribute. File systems are a common hierarchy in which the nodes are either files or directories.
You are trying to implement a search strategy such as backtracking.
Common Operations Cheat Sheet
The time complexity quoted below are specific to a balanced Binary Search Tree. When inserting and deleting node, the time taken for rebalancing the tree is also taken into account. Here n is the number of nodes in the tree.

Operation	Description	Time complexity	Mutates structure
insert(obj)	Adds obj into the BST, while maintaining a balanced tree.	O(log n)	Yes
delete(obj)	Finds and deletes obj from BST, while maintaining a balanced tree.	O(log n)	Yes
search(obj)	Determines if object is in tree	O(log n)	No
get(n)	Selects the nth highest object	O(log n)	No
rank(rand_obj)	Returns the number of nodes in the BST that are less than or rand_obj. rand_obj does not have to appear in the tree.	O(log n)	No
<iterator>.next()	Gets the next element, starting at current element	O(log n)	No
flatten()	Returns a list containing the nodes in sorted order	O(n)	Implementation dependent
