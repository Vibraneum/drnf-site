# Claude GitHub Actions - Complete Setup Guide

**Date**: November 7, 2025
**Status**: ✅ Workflows Merged to Main - OAuth Token Setup Required

---

## 🎉 What We Just Installed

You now have **3 GitHub Actions workflows** on your `main` branch:

### 1. **static.yml** - Website Deployment ✅
- **Purpose**: Deploys your DRNF website to GitHub Pages
- **Triggers**: On push to main
- **Status**: Already working
- **No setup needed**: Works automatically

### 2. **claude.yml** - Claude On-Demand Assistant 🤖
- **Purpose**: Summon Claude to help with issues/PRs
- **Triggers**: When you mention `@claude` in:
  - Issue comments
  - PR comments
  - Issue descriptions
  - PR reviews
- **Status**: Needs OAuth token to work
- **Setup required**: See below

### 3. **claude-code-review.yml** - Automatic PR Reviews 🔍
- **Purpose**: Claude automatically reviews your pull requests
- **Triggers**: When PRs are opened or updated
- **Features**:
  - Code quality analysis
  - Bug detection
  - Security checks
  - Performance suggestions
- **Status**: Needs OAuth token to work
- **Setup required**: See below

---

## 🚀 How to Enable Claude Actions

### Step 1: Get Your Claude Code OAuth Token

**Option A: If you have Claude Code installed locally (RECOMMENDED)**

1. Open your terminal
2. Run this command:
   ```bash
   claude --version
   # Verify Claude Code is installed
   ```

3. Get your OAuth token:
   ```bash
   # The token is stored in your config
   # Location varies by OS:
   # - Linux: ~/.config/claude-code/config.json
   # - macOS: ~/Library/Application Support/claude-code/config.json
   # - Windows: %APPDATA%/claude-code/config.json
   ```

4. Or use Claude Code's built-in command:
   ```bash
   claude config show
   # Look for oauth_token or api_token
   ```

**Option B: Generate a new token**

1. Visit: https://console.anthropic.com/
2. Go to API Keys section
3. Create a new API key
4. Copy the token (starts with `sk-ant-`)

**⚠️ IMPORTANT**: Keep this token secret! Never commit it to your repository.

---

### Step 2: Add Token to GitHub Secrets

1. **Go to your repository settings:**
   ```
   https://github.com/Vibraneum/drnf-site/settings/secrets/actions
   ```

2. **Click "New repository secret"**

3. **Add the secret:**
   - **Name**: `CLAUDE_CODE_OAUTH_TOKEN`
   - **Value**: (paste your token from Step 1)
   - Click "Add secret"

4. **Verify it's added:**
   - You should see `CLAUDE_CODE_OAUTH_TOKEN` in the list
   - The value will be hidden (shows as `***`)

---

### Step 3: Test Claude Actions

#### Test 1: Create a Test Issue

1. **Go to your repository:**
   ```
   https://github.com/Vibraneum/drnf-site/issues/new
   ```

2. **Create an issue:**
   - **Title**: Test Claude Actions
   - **Body**:
     ```
     @claude Can you help me understand the current deployment workflow?
     ```

3. **Submit the issue**

4. **What should happen:**
   - GitHub Actions will trigger (check Actions tab)
   - Claude will analyze the request
   - Claude will post a comment with helpful information
   - Takes 30-60 seconds

#### Test 2: Create a Test PR (Optional)

1. **Create a new branch locally:**
   ```bash
   git checkout -b test-claude-review
   echo "# Test file" > test.md
   git add test.md
   git commit -m "Test Claude PR review"
   git push origin test-claude-review
   ```

2. **Create PR on GitHub:**
   - Go to: https://github.com/Vibraneum/drnf-site/pulls
   - Click "New pull request"
   - Select: `test-claude-review` → `main`
   - Create pull request

3. **What should happen:**
   - `claude-code-review.yml` workflow triggers
   - Claude analyzes the changes
   - Claude posts review comments
   - Takes 1-2 minutes

---

## 📋 How to Use Claude Actions

### Use Case 1: Ask Claude for Help on Issues

**Scenario**: You're stuck on a bug or need advice

**How to use:**
```markdown
@claude I'm seeing an error when I deploy. Can you check the workflow logs?
```

**Claude will:**
- Read the issue context
- Check relevant files
- Analyze workflow logs (if permitted)
- Provide troubleshooting steps

---

### Use Case 2: Get Automatic PR Reviews

**Scenario**: You open a PR with code changes

**How to use:**
- Just open the PR normally
- Claude automatically reviews it
- No need to mention @claude

**Claude will check:**
- Code quality and best practices
- Potential bugs
- Security issues
- Performance concerns
- Test coverage

---

### Use Case 3: Ask Claude to Do Tasks

**Scenario**: You want Claude to help with repository tasks

**Examples:**
```markdown
@claude Can you update the README with deployment instructions?

@claude Review the last 3 commits and summarize changes

@claude Check if there are any broken links in the documentation
```

---

## ⚙️ Configuration Options

### Customize claude.yml

**Current triggers** (in `.github/workflows/claude.yml`):
```yaml
on:
  issue_comment:     # When someone comments on an issue
  pull_request_review_comment:  # When someone comments on PR files
  issues:            # When issues are created/assigned
  pull_request_review:  # When PR is reviewed
```

**To modify:**
- Edit `.github/workflows/claude.yml`
- Add/remove trigger types
- Adjust permissions as needed

---

### Customize claude-code-review.yml

**Current setup** (in `.github/workflows/claude-code-review.yml`):
- Reviews all PRs
- Reviews all file types

**To limit to specific files** (uncomment in file):
```yaml
on:
  pull_request:
    paths:
      - "css/**/*.css"
      - "js/**/*.js"
      - "*.html"
```

**To limit by PR author** (uncomment in file):
```yaml
if: |
  github.event.pull_request.user.login == 'external-contributor'
```

---

## 🛠️ Troubleshooting

### Issue: Claude doesn't respond to @claude mentions

**Check:**
1. ✅ Is `CLAUDE_CODE_OAUTH_TOKEN` secret set?
   - Go to Settings → Secrets → Actions
   - Verify `CLAUDE_CODE_OAUTH_TOKEN` exists

2. ✅ Did the workflow run?
   - Go to Actions tab
   - Look for "Claude Code" workflow
   - Check if it ran (should see run within 10 seconds of comment)

3. ✅ Are there errors in the workflow?
   - Click on the workflow run
   - Check logs for error messages
   - Common error: "Unauthorized" = wrong/missing token

**Fix:**
- Re-generate OAuth token
- Update GitHub secret
- Try again

---

### Issue: PR reviews don't trigger

**Check:**
1. ✅ Is the workflow file on the main branch?
   ```bash
   git checkout main
   ls .github/workflows/claude-code-review.yml
   # Should exist
   ```

2. ✅ Are PRs targeting main?
   - Workflow only triggers on PRs to main
   - Check PR base branch

3. ✅ Check workflow permissions
   - Settings → Actions → General
   - Workflow permissions: "Read and write permissions"

---

### Issue: "Unauthorized" error in workflow

**Cause:** OAuth token is invalid or missing

**Fix:**
1. Verify token is correct:
   - Should start with `sk-ant-`
   - No extra spaces
   - Not expired

2. Update secret:
   - Settings → Secrets → Actions
   - Delete `CLAUDE_CODE_OAUTH_TOKEN`
   - Re-add with correct token

---

## 🔒 Security Best Practices

### ✅ DO:
- Keep OAuth token in GitHub Secrets (never in code)
- Use read-only tokens when possible
- Rotate tokens periodically
- Review Claude's actions in workflow logs

### ❌ DON'T:
- Commit tokens to repository
- Share tokens publicly
- Use tokens from untrusted sources
- Give unnecessary permissions

---

## 📊 Workflow Comparison

| Feature | static.yml | claude.yml | claude-code-review.yml |
|---------|-----------|------------|------------------------|
| **Purpose** | Deploy site | On-demand help | Auto PR review |
| **Triggers** | Push to main | @claude mention | PR open/update |
| **Secrets needed** | None | OAuth token | OAuth token |
| **Runtime** | 2-3 min | 30-60 sec | 1-2 min |
| **Status** | ✅ Working | ⏳ Needs token | ⏳ Needs token |

---

## 🎯 Current Deployment Status

### What's Working Right Now:

✅ **Website Deployment**
- Workflow: `static.yml`
- Status: Active and working
- Last deploy: Triggered by your push just now
- Check: https://github.com/Vibraneum/drnf-site/actions

✅ **Branch Structure**
- Only 1 branch: `main`
- Clean and simple
- No confusion

⏳ **Claude Actions**
- Workflows: Installed on main
- Status: Waiting for OAuth token
- Will work once token is added

---

## 📚 Additional Resources

### GitHub Actions Docs:
- https://docs.github.com/en/actions

### Claude Code Docs:
- https://docs.anthropic.com/claude/docs

### Workflow Files Location:
```
.github/workflows/
├── static.yml              (Deployment - ACTIVE)
├── claude.yml              (On-demand - NEEDS TOKEN)
└── claude-code-review.yml  (Auto review - NEEDS TOKEN)
```

---

## 🎉 What You Can Do Now

### Without OAuth Token:
- ✅ Deploy website (via static.yml)
- ✅ Push to main
- ✅ Monitor deployments

### With OAuth Token (After Setup):
- ✅ Everything above, PLUS:
- 🤖 Ask Claude for help in issues
- 🤖 Get automatic PR reviews
- 🤖 Have Claude help with repository tasks
- 🤖 Use Claude as a coding assistant

---

## ✅ Next Steps

1. **Get OAuth token** (from Claude Code or Anthropic Console)
2. **Add to GitHub Secrets** (as `CLAUDE_CODE_OAUTH_TOKEN`)
3. **Test with an issue** (mention `@claude`)
4. **Watch it work!** 🎉

---

## 📝 Summary

### Before (What We Had):
```
Branches: 3-4 branches (confusing)
Workflows: 1 (static.yml only)
Claude Actions: Not working
```

### After (What We Have Now):
```
Branches: 1 branch (main only) ✅
Workflows: 3 (deployment + Claude automation) ✅
Claude Actions: Ready to work (needs token) ⏳
```

---

**Status**: Setup Complete - Token Required for Claude Features
**Documentation**: Complete
**Date**: November 7, 2025
