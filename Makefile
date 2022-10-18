time := date +"%T"
current_tag := $(node Tag.js "get")
major_tag := $(node Tag.js "major")
minor_tag := $(node Tag.js "minor")
patch_tag := $(node Tag.js "patch")

deploy:
	git push --follow-tags

get-tag:
	echo $(current_tag);

set-tag:
ifeq ($(type), )
	echo "Please provide a type major|minor|patch"
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

tag: set-tag
	echo $(current_tag)
	# git checkout main && \
	# git pull origin main && \
	# git add -A && \
	# git tag $(current_tag) -m $(time)



