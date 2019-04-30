# Chatr & Chat-Battle

# Resetting Chat-Battle's DB

```bash
heroku pg:reset DATABASE  -a chat-battle
heroku run rake db:migrate -a chat-battle
```
