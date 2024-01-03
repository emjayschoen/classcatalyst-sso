# Landing Page

## Setup

> bin/setup

### Find and replace

* replace all 'CHANGEME-slug'
* replace all 'CHANGEME-title'
* replace all 'CHANGEME'
* update firebase.js
* update .firebaserb

### Firebase

* update src/firebase.js

## Development

> bin/dev

## Generating components

If you want to create a component, say "job_listings", then you can use the custom generator like this: 

```
./bin/generate component solve/path/to/job_listings
```

It will quickly setup all the files for you with the proper names. 

## Code Review

We use ReviewBoard. Feel free err on the side of sending code reviews too early, but
please ensure that all code you push is reviewed at some point.

On OSX, ensure you have a working python 2.x install (eg, `brew install python@2`)
and then install `rbt` with the following command:

    sudo easy_install -U RBTools

Every project needs to have a `.reviewboardrc` file configured with the appropriate repo name:

    REVIEWBOARD_URL = 'https://cr.protalabs.com/'
    REPOSITORY = '<REPO_NAME>'

`rbt` supports the `--help` flag, but here are a few quick tips to get your started:

* Post a diff of everything you've committed in the current branch that hasn't been pushed upstream:

      rbt post

* Post a diff consisting of a specific commit range

      rbt post asdf123...876acdc

* Update your already-created review with all commits not pushed

      rbt post --update

* Update a specific review with new commits

      rbt post --update -r 12

By default, reviews are posted in 'draft' mode.  You need to view the review in ReviewBoard,
verify that it's what you expect, add reviewers (safe default, just add the `devs` group),
then publish the review before anyone other than you can see it.

If you want to skip those steps, you can use the following one-liner:

    rbt post -p --target-groups devs

It's generally a much better idea to review your diff before publishing, as it gives you a chance
to catch things you might not have noticed, and ensure you're not pushing the wrong diff.

Once your CR has been reviewed and approved (a 'Ship-It' with no 'Fix-It's remaining), make sure
to resolve your CR as `submitted`, signaling that you're not looking for any more feedback.

## Deployment

> bin/deploy

## TODO

* i18n content
* backend - rails or firebase
* GA setup for demand tests
