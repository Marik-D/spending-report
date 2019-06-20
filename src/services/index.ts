import { TransactionStorageService } from "./TransactionStorageService";
import { TransactionParserService } from "./TransactionParserService";
import { TransactionGroupingService } from "./TransactionGroupingService";
import { StorageService } from "./StorageService";
import { ClassStorageService } from "./ClassesService";

export function setup() {
  const transactionStorageService = new TransactionStorageService()
  const transactionParserService = new TransactionParserService()
  const classStorageService = new ClassStorageService()
  const transactionGroupingService = new TransactionGroupingService(classStorageService)

  return {
    transactionStorageService,
    transactionParserService,
    transactionGroupingService,
    classStorageService,
  }
}

export type Services = ReturnType<typeof setup>
