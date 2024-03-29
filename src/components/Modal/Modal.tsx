import { HomeProps } from "../../@types/data";
import { useContext, useEffect } from "react";
import { ModalContext } from "../../Hooks/ModalContext";
import { Link, useLocation } from "react-router-dom";

/* Styles */
import "./styles.scss";

export const Modal = ({ data }: HomeProps) => {
  const { modalOpen, modalHandler } = useContext(ModalContext);

  const { pathname } = useLocation();

  useEffect(() => {
    if (modalOpen) {
      modalHandler(!modalOpen);
    }
  }, [pathname]);

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
                  <Link to={item.slug} className="modal-link">
                    <li className="modal-item" key={item.id}>
                      <span>{item.name}</span>
                    </li>
                  </Link>
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
