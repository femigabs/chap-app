import mongoose from'../database';

const userSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        username: String,
        email: String,
        password: String,
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
        }
    }
)

const User = mongoose.model('User', userSchema);

export default User;