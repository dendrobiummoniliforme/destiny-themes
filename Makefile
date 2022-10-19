time := $(shell date +"%T")
current_tag := $(shell node Tag.js "get")
current_branch := $(shell git branch | grep "* main")

deploy: deploy-git deploy-vs
	echo "Current Tag $(current_tag)"
	echo "Type $(type)"
	echo "Deploying!"

deploy-git: tag
	git push --follow-tags

tag: set-tag
	git tag $(current_tag) -m "$(time)"

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

get-tag:
	echo "get-tag $(current_tag)"

deploy-vs:
	vsce package
