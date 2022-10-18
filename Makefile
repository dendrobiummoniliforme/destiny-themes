time := $(date +"%T")
current_tag := $(node Tag.js "get")
major_tag := $(node Tag.js "major")
minor_tag := $(node Tag.js "minor")
patch_tag := $(node Tag.js "patch")
current_git_branch := $(git branch | grep "\* main")

deploy: deploy-git deploy-vs
	echo "Current Tag $(current_tag)"
	echo "Type $(type)"
	echo "Deploying!"

deploy-git: tag
	git push --follow-tags

tag: set-tag
	echo "Current Tag $(current_tag)"
	git pull origin main && \
	git add -A && \
	git tag $(current_tag) -m "$(time)"

set-tag: get-tag
ifeq ($(current_git_branch),)
	echo "Current Git is not main"
	exit 2
endif
	echo "Current Git $(current_git_branch)"
ifeq ($(type), )
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

get-tag:
	echo "get-tag $(current_tag)"

deploy-vs:
	vsce package
