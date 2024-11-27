const express = require('express');
const { Octokit } = require('@octokit/rest');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables

const app = express();
app.use(bodyParser.json());

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,  // GitHub PAT from .env file
});

const OWNER = 'vanemorn';
const REPO = 'vanessa_portfolio';
const POST_DIRECTORY = 'posts';  // Folder to store posts

// POST endpoint to save a post to GitHub
app.post('/savePost', async (req, res) => {
  const { title, body } = req.body;
  const fileName = `${title}.md`;  // Use title as the file name
  const fileContent = `# ${title}\n\n${body}`; // Markdown format

  try {
    // Attempt to get the file from GitHub (check if it exists)
    const { data: existingFile } = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path: `${POST_DIRECTORY}/${fileName}`,
    });

    if (existingFile) {
      // If file exists, update it
      await octokit.repos.createOrUpdateFileContents({
        owner: OWNER,
        repo: REPO,
        path: `${POST_DIRECTORY}/${fileName}`,
        message: `Update post: ${title}`,
        content: Buffer.from(fileContent).toString('base64'),
        sha: existingFile.sha,  // Required for updating existing file
      });
      return res.status(200).send('Post updated successfully!');
    }
  } catch (error) {
    // If file doesn't exist, create a new post
    await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: `${POST_DIRECTORY}/${fileName}`,
      message: `Create post: ${title}`,
      content: Buffer.from(fileContent).toString('base64'),
    });
    return res.status(200).send('Post created successfully!');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
