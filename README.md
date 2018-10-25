# Cargo

## What is Cargo?

Cargo is an easy way to create sandbox for quickly experimenting with popular technologies like node, react, angular, flask etc.

## How it works?

It just downloads a specific project scaffold with docker support.

## What should I do?

1. Install docker from [here](https://www.docker.com/)

2. Install cargo cli using the command

```sh
npm install cargo-cli -g
```

3. Update your local cargoes using the command

```sh
ship-cargo update
```

4. Create a project scaffold of your wish using the command

```sh
ship-cargo create node
```

You can also choose a destination where the scaffold should be downloaded as

```sh
ship-cargo create node ~/Documents/Sandbox
```

5. In the downloaded project scaffold run the following command to start experimenting

```sh
docker-compose up
```

## Where are the cargoes maintained?

They are maintained in a seperate git repository which you can find it [here](https://github.com/ameerthehacker/cargo-core.git)

## How can I add my cargo to the cargoes repository?

Feel free to create a pull request with your cargo [here](https://github.com/ameerthehacker/cargo-core.git)

Show your support by :star: the repo

## License

MIT © [Ameer Jhan](mailto:ameerjhanprof@gmail.com)