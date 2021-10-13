## Initial Setup with 1 model
1. Install the  **sequelize**  and  **pg**  modules in our project.    
    -   `npm install sequelize pg`
2.   Use  `sequelize init`  to generate the files and folders.
3.  Update the  `config.json`  file for our project.
4.  Create the database with `sequelize db:create`
5.   Create a model (remember to make a FK column if you need it)

_Models have singular, PascalCased names (such as `UserModel`)
Attributes of models have camelCased names (such as `userId`)
Tables have plural, snake_cased (all lowercase) names (such as `users`)_
```
sequelize model:generate --name <ModelName> --attributes <someKey>:<datatype>,<anotherKey>:<anotherDatatype>
```
6.   Add the properly cased tableName to the model
```js
    Model.init({ 
	    attributeKey: DataType
	}, { 
	    modelName: 'SomePascalCasedName',
	    tablename: 'some_plural_snake_cased_name'
    })
```
7.   Update the migration file with the correct table name before executing the migration

```js
     module.exports = {
          up: await queryInterface.createTable('some_plural_snake_cased_name', { fields }),
          down: async (queryInterface, Sequelize) => {
            await queryInterface.dropTable('some_plural_snake_cased_name')
          }
        }
```     
8.  Execute the migration
    
    -   `sequelize db:migrate`
 
 ## Queries
[Sequelize manual](https://sequelize.org/master/manual/querying.html)

### Modifying a table with queryInterface
Use this command to create a new migration:
```sequelize migration:generate --name <descriptive-name-here>```

In the new migration, update the queryInterface method with your changes.  Reference the docs: [Basic methods](https://sequelize.org/master/manual/query-interface.html) | [Complete queryInterface docs](https://sequelize.org/master/class/lib/dialects/abstract/query-interface.js~QueryInterface.html)

After modifying the table, execute the new migration; be sure to **update the model if necessary**
    
    -   `sequelize db:migrate`
  
  ## Associating Models
  1. Add a `hasMany` method to the `User` model. [Docs](https://sequelize.org/master/manual/assocs.html#implementation); best to use `modelNameId` as the foreignKey column name
  
  ```js
  class User extends Model {
	  static associate(models) {
    // define association here
	    User.hasMany(models.Task, { foreignKey: 'userId' })
    }
}
```
2. Add a `belongsTo` method to the `Task` model, specifying the same foreignKey as used in the User model
```js
class Task extends Model {
  static associate(models) {
    // define association here
    Task.belongsTo(models.User, { foreignKey: 'userId' })
  }
}
```
3. Update the `userId` field to declare it as a foreign key on Task (`belongsTo`) model; (this model was created with a userId field from the beginning with FK in mind - here it is just being updated to reflect the association vs. simply saying DataTypes.INTEGER)

```js
Task.init(
  {
    title: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks'
  }
)
```
4. Update the Task migration in a similar fashion _before_ running the migration
```js
    userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
```
5. Run the migration & seed _(optional)_

### Association Query Examples
[Docs](https://sequelize.org/master/manual/assocs.html#lazy-loading-example)
```js
const  findAllWithTasks = async () => {
	// Find all users with their associated tasks
	// Raw SQL: SELECT * FROM users JOIN tasks ON tasks."userId" = users.id;
	const  res = await  User.findAll({
		include:  Task
	})
}
const  findAllJohnsWithTasks = async () => {
// Find all users with their associated tasks
// Raw SQL: SELECT * FROM users JOIN tasks ON tasks."userId" = users.id WHERE users."firstName" = 'John';
	const  res = await  User.findAll({
		where: {
			firstName:  'John'
		},
		include:  Task
	})
}
```






See video clips in action



Message Nabila Ayaba (she/her) - DC










