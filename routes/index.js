var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  try {
    req.db.query('SELECT * FROM todos;', (err, results) => {
      if (err) {
        console.error('Error fetching todos:', err);
        return res.status(500).send('Error fetching todos');
      }
      res.render('index', {
        title: 'My Simple TODO',
        todos: results,
        error: req.query.error === 'empty'
      });
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
});

router.post('/create', function (req, res, next) {
    const task = req.body.task?.trim();

      if (!task) {
        return res.redirect('/?error=empty');
      }

    try {
      req.db.query('INSERT INTO todos (task) VALUES (?);', [task], (err, results) => {
        if (err) {
          console.error('Error adding todo:', err);
          return res.status(500).send('Error adding todo');
        }
        console.log('Todo added successfully:', results);
        // Redirect to the home page after adding
        res.redirect('/');
      });
    } catch (error) {
      console.error('Error adding todo:', error);
      res.status(500).send('Error adding todo');
    }
});

router.post('/delete', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('DELETE FROM todos WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error deleting todo:', err);
          return res.status(500).send('Error deleting todo');
        }
        console.log('Todo deleted successfully:', results);
        // Redirect to the home page after deletion
        res.redirect('/');
    });
    }catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).send('Error deleting todo:');
    }
});

router.post('/complete', function(req, res) {
    const { id } = req.body;

    req.db.query(
        'UPDATE todos SET completed = TRUE WHERE id = ?',
        [id],
        (err) => {
            if (err) {
                console.error('Error completing task:', err);
                return res.status(500).send('Error completing task');
            }

            res.redirect('/');
        }
    );
});

module.exports = router;

router.post('/edit', function(req, res) {
    const { id, task } = req.body;

    const updatedTask = task.trim();

    if (!updatedTask) {
        return res.status(400).send('Task cannot be empty');
    }

    req.db.query(
        'UPDATE todos SET task = ? WHERE id = ?',
        [updatedTask, id],
        (err) => {
            if (err) {
                console.error('Error editing task:', err);
                return res.status(500).send('Error editing task');
            }

            res.redirect('/');
        }
    );
});