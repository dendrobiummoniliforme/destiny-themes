# Deploy to github and VS Code Marketplace
deploy: deploy-git deploy-vs
	echo "Current Tag $(current_tag)"
	echo "Type $(type)"
	echo "Deploying!"

# Deploy to git
deploy-git: tag
	git push --follow-tags

# Tag the current git branch
tag: set-tag
	git tag $(shell node Tag.js "get") -m "$(shell date +"%T")"

# Using Tag.js, set the package.json version value to value + 1.
set-tag:
ifeq ($(type),)
	echo "Please provide a type major|minor|patch"
	exit 1
endif
ifeq ($(type), major)
	echo "Major"
	node Tag.js "major"
endif
ifeq ($(type), minor)
	echo "Minor"
	node Tag.js "minor"
endif
ifeq ($(type), patch)
	echo "Patch"
	node Tag.js "patch"
endif

# Deploy to VS Code Marketplace
deploy-vs:
	vsce package
