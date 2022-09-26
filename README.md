# Dependency inversion principle example

This project is intended for showing how the dependency inversion principle and dynamic modules should be implemented.

## Installation

```bash
yarn install
```

## Development setup
Create a `.env` file from `.development.env` and set the appropriate value for `GITHUB_TOKEN`, 
then you can run the project with the command -> `yarn run start:dev`


# API endpoints

`GET /repository-statistics/repository/{repo}/reviewer/{reviewer}/pending-prs`

**Parameters**
| Name          | Required         | Type     | Description
| ------------- | -------------    | -------- | --------
| repo          | Required         | string   | The name of the repository. The name is not case sensitive
| reviewer      | Required         | string   | The reviewer account. The name is not case sensitive

### Response

    [
      {
		"url": "https://api.github.com/repos/MoisesTR/robofriends/pulls/1",
		"title": "Configure Renovate",
		"createdAt": "2022-04-18T03:37:37Z",
		"updatedAt": "2022-09-26T02:56:43Z",
		"draft": false,
		"labels": ["documentation"]
	  }
    ]


## License
[MIT](https://choosealicense.com/licenses/mit/)