# OAuth Token Setup - Step by Step

**Date**: November 7, 2025
**Token Received**: ✅ Yes
**Token Type**: Long-lived (1 year validity)

---

## 🔐 Your OAuth Token

**Token**: `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`

**⚠️ IMPORTANT**: This token is stored in this file temporarily. DELETE this file after adding to GitHub Secrets!

---

## 📋 How to Add Token to GitHub

### Step 1: Go to Repository Settings

**URL**: https://github.com/Vibraneum/drnf-site/settings/secrets/actions

Or manually navigate:
1. Go to: https://github.com/Vibraneum/drnf-site
2. Click "Settings" tab (top right)
3. Click "Secrets and variables" → "Actions" (left sidebar)

---

### Step 2: Create New Secret

1. Click the **"New repository secret"** button (green button, top right)

2. Fill in the form:
   - **Name** (exactly as shown, case-sensitive):
     ```
     CLAUDE_CODE_OAUTH_TOKEN
     ```

   - **Value** (paste this token):
     ```
     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
     ```

3. Click **"Add secret"** (green button at bottom)

---

### Step 3: Verify Secret is Added

After adding, you should see:
- Secret name: `CLAUDE_CODE_OAUTH_TOKEN`
- Value: Hidden (shows as `***`)
- When added: Today's date

---

## ✅ Test Claude Actions

### Test 1: Create a Test Issue

1. **Go to Issues**:
   https://github.com/Vibraneum/drnf-site/issues/new

2. **Create issue with this content**:
   - **Title**: Test Claude Actions
   - **Body**:
     ```
     @claude Can you help me understand the deployment workflow for this website?
     ```

3. **Submit issue**

4. **What should happen**:
   - GitHub Actions triggers within 10 seconds
   - Claude analyzes the question
   - Claude posts a helpful comment
   - Takes 30-60 seconds total

5. **Check if it worked**:
   - Go to Actions tab: https://github.com/Vibraneum/drnf-site/actions
   - Look for "Claude Code" workflow
   - Should show as running or completed
   - Check issue for Claude's response

---

### Test 2: Ask Claude a Question

Create another issue:

**Title**: Help with CSS
**Body**:
```
@claude I'm seeing some visual issues with the Initiatives section. Can you review the CSS for .initiative-card and suggest improvements?
```

Claude should respond with CSS analysis and suggestions!

---

## 🔒 Security Best Practices

### ✅ DO:
- Keep token in GitHub Secrets only
- DELETE this OAUTH_TOKEN_SETUP.md file after adding token
- Rotate token every 6-12 months
- Never commit tokens to repository

### ❌ DON'T:
- Share token publicly
- Commit this file to git
- Post token in issues/PRs
- Use token outside GitHub Actions

---

## 🧹 Cleanup After Setup

**IMPORTANT**: After you add the token to GitHub Secrets, DELETE this file!

```bash
cd "/mnt/d/Ixora Sites/DRNF_website"
rm OAUTH_TOKEN_SETUP.md
git add -u
git commit -m "Remove OAuth token setup file (token securely stored)"
git push origin main
```

---

## 🎯 What You Can Do Now

Once token is added:

### 1. Ask Claude for Help in Issues
```
@claude Can you review the Contact page CSS?
@claude Help me understand the deployment workflow
@claude What files should I modify to change the hero section?
```

### 2. Get Automatic PR Reviews
- Open a pull request
- Claude automatically reviews it
- Get feedback on code quality, bugs, security

### 3. Ask Claude to Do Tasks
```
@claude Update the README with deployment instructions
@claude Check for broken links in the documentation
@claude Review recent commits and summarize changes
```

---

## 📊 Workflow Status

### After Token is Added:

| Workflow | Status | Needs Token | Will Work |
|----------|--------|-------------|-----------|
| static.yml | ✅ Active | No | ✅ Yes (already working) |
| claude.yml | ⏳ Installed | Yes | ✅ Yes (after token added) |
| claude-code-review.yml | ⏳ Installed | Yes | ✅ Yes (after token added) |

---

## 🔧 Troubleshooting

### Issue: Token doesn't work

**Check:**
1. Secret name is exactly: `CLAUDE_CODE_OAUTH_TOKEN` (case-sensitive)
2. Token value has no extra spaces
3. Token starts with: `sk-ant-oat01-`

**Fix:**
- Delete the secret
- Re-add with correct name/value

---

### Issue: Claude doesn't respond

**Check:**
1. Did you mention `@claude` in the issue?
2. Did the workflow run? (Check Actions tab)
3. Are there errors in workflow logs?

**Fix:**
- Verify token is added to Secrets
- Check workflow logs for error messages
- Try creating a new issue

---

## 📝 Quick Summary

**Token**: ✅ Received (1-year validity)
**Where to add**: GitHub Settings → Secrets → Actions
**Secret name**: `CLAUDE_CODE_OAUTH_TOKEN`
**Test**: Create issue with `@claude` mention
**Cleanup**: DELETE this file after setup

---

**Status**: Ready to add token
**Next step**: Follow steps above to add to GitHub Secrets
**After setup**: Delete this file!

---

**Created**: November 7, 2025
