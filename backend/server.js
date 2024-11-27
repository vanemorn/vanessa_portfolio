const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());

// Endpoint to save posts to GitHub
app.post('/savePost', async (req, res) => {
  const { title, body, file } = req.body;
  const githubToken = process.env.GITHUB_TOKEN;
  const repoOwner = process.env.REPO_OWNER;
  const repoName = process.env.REPO_NAME;

  // Prepare post data to save as a markdown file
  const content = `# ${title}\n\n${body}`;

  try {
    // GitHub API URL for creating or updating files
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/posts/${title}.md`;

    // Check if the file exists (we'll use the "sha" of the file to update it)
    let sha = '';
    try {
      const getFileResponse = await axios.get(url, {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      });
      sha = getFileResponse.data.sha;
    } catch (error) {
      console.log('File not found, creating new file...');
    }

    // Prepare the data to send to GitHub
    const data = {
      message: `Create new post: ${title}`,
      content: Buffer.from(content).toString('base64'),
      ...(sha && { sha }), // If updating, include sha
    };

    // Make a request to GitHub API to save the post as a markdown file
    await axios.put(url, data, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    res.status(200).json({ message: 'Post saved to GitHub' });
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).json({ error: 'Failed to save post to GitHub' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
