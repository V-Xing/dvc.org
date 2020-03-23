# Get Started with DVC!

You'll need [Git](https://git-scm.com) to run the commands in this tutorial.
Also, if DVC is not installed, please follow these [instructions](/doc/install)
first.

In the next few pages we'll build a simple natural language processing (NLP)
project from scratch. If you'd like to get the complete project or have any
issues along the way, you can clone the fully reproducible
[GitHub project](https://github.com/iterative/example-get-started):

```dvc
$ git clone https://github.com/iterative/example-get-started
```

This project explores the NLP problem of predicting tags for a given
StackOverflow question. For example, we might want a classifier that can
classify (or predict) posts about Python by tagging them with `python`.

![](/img/example-flow-2x.png) _Data modeling overview_

> This is a simplified version of our [Deep Dive Tutorial](/doc/tutorials/deep).

Keep in mind that NLP is not the only area of data science where DVC can help.
DVC is designed to be agnostic of frameworks, programming languages, etc.

## Initialize

Let's start by creating a <abbr>workspace</abbr> we can version with Git. Then
run `dvc init` inside to create a DVC <abbr>repository</abbr>:

```dvc
$ mkdir example-get-started
$ cd example-get-started
$ git init
$ dvc init
...
$ git commit -m "Initialize DVC project"
```

At DVC initialization, a new `.dvc/` directory is created for internal
configuration and cache
[files and directories](/doc/user-guide/dvc-files-and-directories) that are
hidden from the user.

> See [DVC Files and Directories](/doc/user-guide/dvc-files-and-directories) to
> learn more about the DVC internal file and directory structure.

The last command, `git commit`, versions the `.dvc/config` and `.dvc/.gitignore`
DVC internal files with Git.

## Configure

Remote storage for the <abbr>project</abbr> (see `dvc remote`) should be set up
if you need to share data or models outside of the local context, for example
with other collaborators or even for yourself to access from a different
computing environment.

For simplicity, let's set up a _local remote_.

<details>

### What is a "local remote" ?

While the term may seem contradictory, it doesn't have to be. The "local" part
refers to the location of the storage relative to the project, so it can be any
directory in the file system. "Remote" is the term that refers to the storage.
Read "local cache backup".

</details>

```dvc
$ dvc remote add -d myremote /tmp/dvc-storage
$ git commit .dvc/config -m "Configure local remote"
```

> We only use a local remote in this tutorial for simplicity's sake.. For most
> cases, other "more remote" types of remotes will be required.

[Adding a remote](/doc/command-reference/remote/add) requires specifying both
its type and its path. DVC currently supports these protocols:

- `s3`: Amazon Simple Storage Service
- `azure`: Microsoft Azure Blob Storage
- `gdrive`: Google Drive
- `gs`: Google Cloud Storage
- `ssh`: Secure Shell (requires SFTP)
- `hdfs`: Hadoop Distributed File System
- `http`: HTTP and HTTPS protocols
- `local`: Directory in the local file system

> Refer to `dvc remote` for more details and examples.

There are several more things that can be optionally configured in <abbr>DVC
projects</abbr>, please see `dvc config` for more information.

## Ready to go!

You can see that DVC doesn't require installing any databases, servers, or
warehouses. It can use simple S3 or SSH to store data, intermediate results, and
ML models. Please go to the next page of this tutorial to continue ↘