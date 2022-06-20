export interface IUseCase<T, K> {
  execute(params?: T): Promise<K | Error>;
}
