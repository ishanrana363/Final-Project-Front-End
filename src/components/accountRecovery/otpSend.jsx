

const OtpSend = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4 className="animated fadeInUp mb-5 " > Send opt </h4>
                                <input
                                       required={true} placeholder="Email" type="email"  className="form-control animated fadeInLeft mt-5 "
                                />
                                <br/> <br/>
                                <button
                                        className="btn w-100 animated fadeInDown mb-5 float-end btn-primary">Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtpSend;