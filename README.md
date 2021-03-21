# Coralogix-AddTag
Add a tag to Coralogix application &amp; sub-system
https://coralogix.com/tutorials/software-builds-display/

## Inputs

### `key`

**Required** Your company's private key.

### `application`

**Required** Your application name.

### `subsystem`

**Required** Your subsystem names. You can input more than one subsystem name, use comma delimiter ‘,’  between subsystems names.

### `name`

**Required** Your version tag name.

## Example usage

```
uses: 365scores/Coralogix-AddTag@v0
with:
  key: '254as5dasd2f51ef3s5'
  application: 'Calculator'
  subsystem: 'Linear Algebra'
  name: '1.0.1-Alfa'
```