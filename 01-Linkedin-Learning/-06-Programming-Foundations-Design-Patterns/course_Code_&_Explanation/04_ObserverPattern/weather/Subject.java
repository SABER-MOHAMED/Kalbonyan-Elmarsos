package headfirst.designpatterns.observer.weather;

public interface Subject {
	public void registerObserver(Observer o);
	public void removeObserver(Observer o);
	public void notifyObservers();
}
Footer
© 2022 GitH