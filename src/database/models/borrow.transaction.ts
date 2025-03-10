import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { GeneralTransaction } from "./general.transaction";
import { RelatedUser } from "./related.user";

@Table({ timestamps: false })
export class BorrowTransaction extends Model {
    @ForeignKey(() => GeneralTransaction)
    @Column
    generalTransactionId: number;

    @BelongsTo(() => GeneralTransaction)
    generalTransaction: GeneralTransaction;

    @ForeignKey(() => RelatedUser)
    @Column
    lenderId: number;

    @BelongsTo(() => RelatedUser)
    lender: RelatedUser;

    @Column
    repaymentDate: Date;

    @Column
    repaymentAmount: number;
}