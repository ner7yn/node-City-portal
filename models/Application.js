import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    teg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Новая', 'Решена', 'Отклонена'],
        default: 'Новая',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    imageUrlBefore: {
        type: String,
        required: true,
    },
    imageUrlAfter: {
        type: String,
        required: true,
        default: 'пусто',
    },
}, {
    timestamps: true,
})

export default mongoose.model('Application', ApplicationSchema);