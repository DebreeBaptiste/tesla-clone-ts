/* Styles */
import { useContext } from "react";
import "./styles.scss";
import { ModalContext } from "../../Hooks/ModalContext";

interface ModalProps {
  data: any;
}

export const Modal = ({ data }: ModalProps) => {
  const { modalOpen, modalHandler } = useContext(ModalContext);

  return (
    <>
      <div className="modal" aria-hidden={!modalOpen}>
        {modalOpen && (
          <>
            <div className="modal-header">
              <button className="modal-close-button" aria-label="Close Modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  fill="#171a20"
                  onClick={(modalOpen) => modalHandler(!modalOpen)}
                >
                  <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                </svg>
              </button>
            </div>
            <section className="modal-content">
              <ul className="modal-list">
                {data.menu.map((item: any) => (
                  <li className="modal-item" key={item.id}>
                    <a href={item.slug} className="modal-link">
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>
      <div
        className="modal-backdrop"
        onClick={(modalOpen) => modalHandler(!modalOpen)}
      ></div>
    </>
  );
};
