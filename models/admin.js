import mongoose from 'mongoose';

const adminInfoSchema = mongoose.Schema({
    adminName: String,
    adminEmail: String,
    adminPassword: String,
    // description
    descriptionAboutServiceLine1: String,
    descriptionAboutServiceLine2: String,
    descriptionAboutServiceLine3: String,
    descriptionAboutServiceLine4: String,
    descriptionAboutServiceLine5: String,
});

export default mongoose.model('admins', adminInfoSchema);