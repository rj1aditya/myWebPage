document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      title: "Count Ways To Reach The N-th Stairs",
      description: [
        "https://www.naukri.com/code360/problems/count-ways-to-reach-nth-stairs_798650?source=youtube&campaign=striver_dp_videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_dp_videos&leftPanelTabValue=PROBLEM",
      ],
      solution: "DP_solution/NStair.html",
      nt: "The expression 1e9+7 represents the number 1,000,000,007. Its commonly used in programming as a prime number close to (10^9) for computations involving large numbers. This helps prevent integer overflow and ensures that results fit within the range of standard integer types.",
    },
    {
      title: "Frog jump",
      description: [
        "https://www.naukri.com/code360/problems/frog-jump_3621012?source=youtube&campaign=striver_dp_videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_dp_videos",
      ],
      solution: "DP_solution/FrogJump.html",
      nt: "",
    },
    {
      title: "Frog Jump with K Distance",
      description: ["https://atcoder.jp/contests/dp/tasks/dp_b"],
      solution: "DP_solution/FrogJumpWithKDistance.html",
      nt: "--",
    },
    {
      title: "Maximum Sum of Non-Adjacent Elements",
      description: ["https://bit.ly/3PURfqU"],
      solution: "DP_solution/MaxSumOfNonAdjcElems.html",
      nt: "--",
    },
    {
      title: "House Robber II",
      description: ["https://bit.ly/49vceYm"],
      solution: "DP_solution/HouserRobber2.html",
      nt: [
        "This question is similar to Maximum Sum of Non-Adjacent Elements only modification to handle cirle neighboorhood so it is handle by taking max of 2 ans in first ans not considering 0th element then in second ans not considering last the element. Reason is as mentioned in the question 1st and last neighbour are adjacent, so in the ans either 0th element wont come or last element wont come thats why we eleminate either 0th element or last element",
        "this question is only solved in tabulation mode since similar question to Maximum Sum of Non-Adjacent Elements.",
      ],
    },
    {
      title: "Ninjas Training ***",
      description: ["https://bit.ly/49w8Lsr"],
      solution: "DP_solution/ninjaTraining.html",
      nt: ["--"],
    },
    {
      title: "Unique paths",
      description: ["https://bit.ly/3TOpWzq"],
      solution: "DP_solution/UniquePath.html",
      nt: [
        "This question has been solved in two way, coz in first way TC was not sufficient.",
      ],
    },
    {
      title: "Unique Paths 2 | DP on Grid with Maze Obstacles",
      description: ["https://bit.ly/4dfsUG7"],
      solution: "DP_solution/uniquePath2.html",
      nt: ["--"],
    },
    {
      title: "Minimum Path Sum in Grid",
      description: ["https://bit.ly/3UgrtyN"],
      solution: "DP_solution/MinPathSumInGrid.html",
      nt: [""],
    },
    {
      title: "Triangle | Fixed Starting Point and Variable Ending Point",
      description: ["https://bit.ly/3UxeREz"],
      solution: "DP_solution/triangle.html",
      nt: ["--"],
    },
    {
      title: "Triangle | Fixed Starting Point and Variable Ending Point",
      description: ["https://bit.ly/3UxeREz"],
      solution: "DP_solution/triangle.html",
      nt: ["--"],
    },
    {
      title: "Minimum/Maximum Falling Path Sum",
      description: ["https://bit.ly/3xWqtbp"],
      solution: "DP_solution/MaxMinFallingPath.html",
      nt: ["--"],
    },
    {
      title: "Cherry Pickup II | 3D DP",
      description: ["https://bit.ly/3QnEwNL"],
      solution: "DP_solution/CherryPickup2.html",
      nt: [
        "This is a 3D DP problem, tabulation and space optimization is not done yet will solve it later.",
      ],
    },
    {
      title: "Subset Sum Equals to Target",
      description: ["https://bit.ly/3ukNmRZ"],
      solution: "DP_solution/subsetSumEqToTarget.html",
      nt: [
        "Tabulation is not clear fully, space optimization is also not clear",
      ],
    },
    {
      title: "Partition Equal Subset Sum",
      description: ["https://bit.ly/34iIIsH"],
      solution: "DP_solution/partitionEqualSubsetSum.html",
      nt: [
        "this question is similar to Subset Sum Equals to Target, but here target just changed to totalSum/2 to for the 1st subset and for the 2nd subset other totalSum/2 would be the ans.",
      ],
    },
    {
      title:
        "Partition A Set Into Two Subsets With Minimum Absolute Sum Difference",
      description: ["https://bit.ly/3t62bqQ"],
      solution: "DP_solution/PartitionIn2SubsetWithMinDiff.html",
      nt: [
        "this question is similar to Subset Sum Equals to Target, but here target just changed to totalSum/2 to for the 1st subset and for the 2nd subset other totalSum/2 would be the ans.",
      ],
    },
    {
      title: "Counts Subsets with Sum K",
      description: ["https://bit.ly/3B5JBkU"],
      solution: "DP_solution/countOfSubsetSumEqToK.html",
      nt: [""],
    },
    {
      title: "Count Partitions With Given Difference",
      description: ["https://bit.ly/3r8mG5b"],
      solution: "DP_solution/countPartitionWithGivenDiff.html",
      nt: [""],
    },
    {
      title: "Knapsack",
      description: ["https://bit.ly/3KHpP3v"],
      solution: "DP_solution/Knapsack.html",
      nt: [
        "In this question have learned more about space optimization, recommended to check the code comments if not understood then check in corresponding video.",
      ],
    },
    {
      title: "Minimum Coins",
      description: ["https://bit.ly/3HJTeIl"],
      solution: "DP_solution/MinimumCoins.html",
      nt: [""],
    },
    {
      title: "Target Sum",
      description: ["https://bit.ly/3swy5uL"],
      solution: "DP_solution/targetSum.html",
      nt: [
        "this question is exact similar to Question 18: Count Partitions With Given Difference. In this question just changed the language.",
      ],
    },
    {
      title: "Coin Change 2",
      description: ["https://bit.ly/33Kd8o2"],
      solution: "DP_solution/coinChange2.html",
      nt: [""],
    },
    {
      title: "Unbounded Knapsack",
      description: ["https://bit.ly/3IvPdXS"],
      solution: "DP_solution/unboundedKnapsack.html",
      nt: [""],
    },
    {
      title: "Rod Cutting Problem",
      description: ["https://bit.ly/3H10kYJ"],
      solution: "DP_solution/RodCuttingProblem.html",
      nt: [""],
    },
    {
      title: "Longest Common Subsequence",
      description: ["https://bit.ly/3pvkqUd"],
      solution: "DP_solution/LongestCommonSubsequence.html",
      nt: [
        "In this code we done right shift of the index.. Read the code for reason or else check its video",
      ],
    },
    {
      title: "Print Longest Common Subsequence",
      description: [
        "https://www.naukri.com/code360/problems/print-longest-common-subsequence_8416383",
      ],
      solution: "DP_solution/PrintLongestCommonSubsequence.html",
      nt: [
        "1st we make the dp matrix then in matrix if we look the last index dp[n][m] there we will get the max lenght of the ans. Now we have to make string. So we backtrace the matrix from the last index and make the longest common subsequence string.",
      ],
    },
    {
      title: "Longest Common Substring ",
      description: ["https://bit.ly/3H2M3KS"],
      solution: "DP_solution/longestCommonSubscript.html",
      nt: [""],
    },
    {
      title: "Longest Palindromic Subsequence",
      description: [
        "https://www.naukri.com/code360/problems/longest-palindromic-subsequence_842787?leftPanelTabValue=PROBLEM",
      ],
      solution: "DP_solution/longestPalindromicSubsequence.html",
      nt: [
        "In this question has given only 1 string. For which we have to find out the longest palindromic subsequence. For a solution we make another string by just making reverse of the given string and treted this question similar as LONGEST COMMON SUBSEQUENCE. Go to the video if not understood.",
      ],
    },
    {
      title: "Minimum insertions to make a string palindrome",
      description: ["https://bit.ly/3H2ZtGP"],
      solution: "DP_solution/MinInsertToMakeStrPalindrome.html",
      nt: [
        "This question is similar to - Question 28: Longest Palindromic Subsequence. With small addition like str.length - longestPalindromicSubsequence",
      ],
    },
    {
      title: "Minimum Insertions/Deletions to Convert String A to String B",
      description: ["https://bit.ly/3pya8CP"],
      solution: "DP_solution/MinInsert_DeletionToMakeStr1toStr2.html",
      nt: [
        "This question is similar to - Question 28: Longest Palindromic Subsequence. With small addition like:",
        "for deletion of char str1.length - longestPalindromicSubsequence",
        "for addition of char str2.length - longestPalindromicSubsequence",
      ],
    },
    {
      title: "Shortest Common Supersequence",
      description: ["https://bit.ly/3vEYKce"],
      solution: "DP_solution/ShortestCommonSupersequence.html",
      nt: [
        "This problem is similar to Question 26: Print Longest Common Subsequence, with small addition to form a super string. Check the image in the solution page.",
      ],
    },

    {
      title: "Distinct Subsequences",
      description: ["https://bit.ly/3nZNxy7"],
      solution: "DP_solution/DistinctSubsequences.html",
      nt: [""],
    },
    {
      title: "Edit Distance",
      description: ["https://bit.ly/3HcTJdy"],
      solution: "DP_solution/EditDistance.html",
      nt: [""],
    },
    {
      title: "Wildcard Matching",
      description: ["https://bit.ly/3vEYKce"],
      solution: "DP_solution/WildcardMatching.html",
      nt: [""],
    },
    {
      title: "Best Time to Buy and Sell Stock",
      description: ["https://bit.ly/3rN7GIL"],
      solution: "DP_solution/BestTimetoBuy_SellStock.html",
      nt: [""],
    },
    {
      title: "Buy and Sell Stock - II",
      description: ["https://bit.ly/3nYO17H"],
      solution: "DP_solution/BuyAndSell2.html",
      nt: [""],
    },

    {
      title: "Buy and Sell Stock - III",
      description: ["https://bit.ly/3rLHkqQ"],
      solution: "DP_solution/BuyAndSell3.html",
      nt: [""],
    },
    {
      title: "Buy and Sell Stock - IV",
      description: ["https://bit.ly/346R72e"],
      solution: "DP_solution/BuyAndSell4.html",
      nt: ["This question is solved using total no of transaction as well"],
    },
    {
      title: "Buy and Sell Stocks With Cooldown",
      description: ["https://bit.ly/3tZsYWA"],
      solution: "DP_solution/BuyAndSellWithCooldown.html",
      nt: [""],
    },
    {
      title: "Buy and Sell Stocks With Transaction Fee",
      description: ["https://bit.ly/3nZucNH"],
      solution: "DP_solution/BuyAndSellWithFee.html",
      nt: ["Similar to Buy and Sell Stock - II, only fee added here"],
    },
    {
      title: "Longest Increasing Subsequence",
      description: ["https://bit.ly/3rVoIoq"],
      solution: "DP_solution/LongestIncresSubsequence.html",
      nt: [
        "All test cases not solved, TLE coming since TC of all solution given is n^2",
      ],
    },
    {
      title: "( @ @ ) Printing Longest Increasing Subsequence",
      description: ["https://bit.ly/3nYO17H"],
      solution: "DP_solution/PrintLongestIncresSubsequence.html",
      nt: ["This is tricky problem, first try to solve it on white board..."],
    },
    {
      title: "Largest Divisible Subset",
      description: ["https://bit.ly/3rON1Ef"],
      solution: "DP_solution/PrintLargestDivisibleSubset.html",
      nt: [""],
    },
    {
      title: "Longest String Chain",
      description: ["https://bit.ly/3KHsl9J"],
      solution: "DP_solution/LongestStringChain.html",
      nt: [
        "This is almost similar to LIS problem, but you have to match is with Tabulation method. To understand this problem check the image and notes on this mention on solution page.",
      ],
    },
    {
      title: "Longest Bitonic Subsequence",
      description: ["https://bit.ly/3r4o1JB"],
      solution: "DP_solution/LongestBitonicSubsequence.html",
      nt: [
        "What is bitonic? first increasing then decresing sequence is called the bitonic.",
        "this will be solve like first we calculate the LIS from left then right, then add the dp1[i]+dp2[i]-1 where i:0-->n-1. Check its image in solution",
      ],
    },
    {
      title: "** Number of Longest Increasing Subsequence",
      description: ["https://bit.ly/3fTRGiz"],
      solution: "DP_solution/NumberofLongestIncreasingSubsequence.html",
      nt: [""],
    },
    {
      title: "------Partition DP---------",
      description: ["How to solve the partition DP check img in solution"],
      solution: "DP_solution/partitionDP.html",
      nt: [""],
    },
    {
      title: "🔥 Matrix Chain Multiplication",
      description: ["https://bit.ly/3nXqfce"],
      solution: "DP_solution/MatrixChainMultiplication.html",
      nt: [""],
    },
    {
      title: "(@ @) Minimum Cost to Cut the Stick",
      description: ["https://bit.ly/3rWLMnC"],
      solution: "DP_solution/MinCostToCutStick.html",
      nt: [""],
    },
    {
      title: "Burst Balloons",
      description: ["https://bit.ly/3Kgck9N"],
      solution: "DP_solution/BurstBalloons.html",
      nt: [""],
    },
    {
      title: "Evaluate Boolean Expression to True | Partition DP",
      description: ["https://bit.ly/32tAMUW	"],
      solution: "DP_solution/EvaluateBooleanExprToTrue.html",
      nt: [
        "https://takeuforward.org/data-structure/evaluate-boolean-expression-to-true-partition-dp-dp-52/",
      ],
    },
    {
      title: "Palindrome Partitioning - II ",
      description: ["https://bit.ly/3jNRzqX"],
      solution: "DP_solution/PalindromePartitioning2.html",
      nt: [""],
    },
    {
      title: "Partition Array for Maximum Sum",
      description: [
        "https://www.naukri.com/code360/problems/partition-array-for-maximum-sum_3755255",
      ],
      solution: "DP_solution/PartitionArrforMaxSum.html",
      nt: [""],
    },
    {
      title: "Maximum Rectangle Area with all 1's",
      description: ["https://bit.ly/33HFz61"],
      solution: "DP_solution/pending.html",
      nt: [
        "We will solve this problem when we will learn stack and queue DSA, in max area of rectangle from histogram problem this question come.",
      ],
    },
    {
      title: "Count Square Submatrices with All Ones",
      description: ["https://bit.ly/3tYAUY7"],
      solution: "DP_solution/CountSquareInMatrix.html",
      nt: [""],
    },
    // Add more question objects here
  ];
  {
    // Add event listeners for toggling descriptions and notes
    const questionList = document.querySelector(".question-list");

    questions.forEach((question, index) => {
      const listItem = document.createElement("li");
      const questionTitle = document.createElement("h3");
      const description = document.createElement("div");
      const solutionLink = document.createElement("a");
      const nts = document.createElement("h4");

      questionTitle.textContent = `Question ${index + 1}: ${question.title}`;
      nts.textContent = "notes";
      questionTitle.classList.add("question-title");
      nts.classList.add("notes");
      const notesContainer = document.createElement("div");
      notesContainer.classList.add("note");
      if (Array.isArray(question.nt)) {
        question.nt.forEach((note) => {
          const noteParagraph = document.createElement("p");
          noteParagraph.textContent = note;
          notesContainer.appendChild(noteParagraph);
        });
      } else {
        notesContainer.textContent = question.nt;
      }
      nts.appendChild(notesContainer);

      description.classList.add("description");
      question.description.forEach((desc) => {
        if (desc.startsWith("http")) {
          // Check if the description is a URL
          const link = document.createElement("a");
          link.href = desc;
          link.textContent = desc; // You can set any text you want for the link
          link.target = "_blank"; // Open in new tab
          description.appendChild(link);
          description.appendChild(document.createElement("br")); // Add a line break
          description.appendChild(document.createElement("br")); // Add a line break
        } else {
          const paragraph = document.createElement("p");
          paragraph.textContent = desc;
          description.appendChild(paragraph);
        }
      });

      solutionLink.href = question.solution;
      solutionLink.target = "_blank";
      solutionLink.textContent = "Solution";

      description.appendChild(solutionLink);
      description.appendChild(nts);

      listItem.appendChild(questionTitle);
      listItem.appendChild(description);

      questionList.appendChild(listItem);
    });

    const questionTitles = document.querySelectorAll(".question-title");

    questionTitles.forEach((title) => {
      title.addEventListener("click", function () {
        const description = this.nextElementSibling;
        description.style.display =
          description.style.display === "block" ? "none" : "block";
      });
    });

    const noteTitles = document.querySelectorAll(".notes");

    noteTitles.forEach((title) => {
      title.addEventListener("click", function () {
        const notesContainer = this.parentElement.querySelector(".note");
        notesContainer.style.display =
          notesContainer.style.display === "none" ? "block" : "none";
      });
    });
  }
});
