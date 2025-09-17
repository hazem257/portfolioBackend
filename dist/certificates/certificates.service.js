"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificatesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const certficate_schema_1 = require("./schemas/certficate.schema");
let CertificatesService = class CertificatesService {
    certificateModel;
    constructor(certificateModel) {
        this.certificateModel = certificateModel;
    }
    async create(data) {
        const created = new this.certificateModel(data);
        return created.save();
    }
    async findAll() {
        return this.certificateModel.find().exec();
    }
    async findOne(id) {
        const cert = await this.certificateModel.findById(id).exec();
        if (!cert)
            throw new common_1.NotFoundException('Certificate not found');
        return cert;
    }
    async update(id, data) {
        const updated = await this.certificateModel.findByIdAndUpdate(id, data, { new: true });
        if (!updated)
            throw new common_1.NotFoundException('Certificate not found');
        return updated;
    }
    async remove(id) {
        const deleted = await this.certificateModel.findByIdAndDelete(id);
        if (!deleted)
            throw new common_1.NotFoundException('Certificate not found');
        return { message: 'Certificate deleted successfully' };
    }
};
exports.CertificatesService = CertificatesService;
exports.CertificatesService = CertificatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(certficate_schema_1.Certificate.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CertificatesService);
//# sourceMappingURL=certificates.service.js.map