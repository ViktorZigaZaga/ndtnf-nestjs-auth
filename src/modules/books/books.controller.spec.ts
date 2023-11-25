import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './data/book'

describe('BooksController', () => {
    let booksController: BooksController;
    let booksService: BooksService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [BooksController],
            providers: [BooksService], 
            exports: [BooksService]
        }).compile();

        booksController = app.get<BooksController>(BooksController);
    });

    describe('root', () => {
        it('adds books', () => {
            const book = new Book();
            booksService.create(book);
            expect(booksService.findAll()).toHaveLength(1);
        });
      });
});
